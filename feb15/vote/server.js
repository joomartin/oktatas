const moment = require('moment');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const votes = {};

function isFirstVote() {
    return Object.keys(votes).length === 0;
}

function getVotesResult() {
    const result = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0
    };

    for (const key in votes) {
        result[votes[key]]++;
    }

    for (const key in result) {
        result[key] = result[key] / Object.keys(votes).length;
    }

    return result;
}

io.on('connection', function (socket) {
    socket.on('new vote', function (vote) {

        if (isFirstVote()) {
            setTimeout(() => {
                console.log('szavazas vege');
                const result = getVotesResult();

                io.emit('vote ended', result);
            }, 5000);
        }

        if (votes[socket.id]) return;

        votes[socket.id] = vote;


    });
});

http.listen(3000, function () {
    console.log('Server listening on port 3000');
});