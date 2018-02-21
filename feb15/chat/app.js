$(document).ready(function () {

    const socket = io('http://127.0.0.1:3000');

    $('#send').click(function () {
        // Kiszedjük a textarea szövegét
        const message = $('#message').val();

        // TODO Elküdjük a szervernek
        socket.emit('new message', message);
        $('#message')
            .val('')
            .focus();
    });

    $('#login').click(function () {
        // validálunk
        if ($('#username').val().length === 0) {
            console.log('próbáld újra');
            return;
        }

        // emitelünk egy 'add user' eseményt        
        socket.emit('add user', $('#username').val());

        // megjelenítjük a chat formot
        $('.login').addClass('d-none');

        $('.new-message')
            .removeClass('d-none');

        $('#message').focus();
    });

    socket.on('chat message', function (data) {
        const div = $('<div></div>');
        const date = new Date;

        div.html(`${date.getHours()}:${date.getMinutes()} ${data.username}: ${data.message}`);

        $('.messages').append(div);
        setTimeout(() => {
            const scrollPane = $('.messages');
            scrollPane.scrollTop = scrollPane.scrollHeight; 
        });
    });

    socket.on('new user', function (users) {
        const usersDiv = $('#users');
        usersDiv.html('');

        for (const user of users) {
            const userDiv = $('<div></div>');

            userDiv
                .html(user.username)
                .data('id', user.id)
                .addClass('user');

            usersDiv.append(userDiv);
        }
    });

    $('body').on('click', '.user', function () {
        const chatWindow = $('#chat-window');

        chatWindow
            .removeClass('d-none')
            .find('.username')
            .html($(this).html());
    });
});