const moment = require('moment');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const LAST_MESSAGES = {};

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('new message', function (message) {
        // Összes csatlakozott kliensnek ki kell ezt küldeni
        // broadcast
        if (message.length !== 0) {
            const last = LAST_MESSAGES[socket.username]; 
            const now = moment();

            if (last) {
                const diff = moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(last,"DD/MM/YYYY HH:mm:ss"))).format("s");
                
                if (diff <= 3) {
                    return;
                }
            }

            io.emit('chat message', {
                message,
                username: socket.username
            });       
            
            LAST_MESSAGES[socket.username] = moment();            
        }
    });

    socket.on('add user', function (username) {
        if (username.length !== 0) {
            console.log(username + ' connected');
            socket.username = username;
        }
    });
});

http.listen(3000, function () {
    console.log('Server listening on port 3000');
});