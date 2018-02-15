const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    socket.on('new message', function (message) {
        // Összes csatlakozott kliensnek ki kell ezt küldeni
        // broadcast
        if (message.length !== 0) {
            io.emit('chat message', {
                message,
                username: socket.username
            });            
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