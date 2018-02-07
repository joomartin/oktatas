window.onload = function () {
    const canvas = document.getElementById('canv');
    const context = canvas.getContext('2d');

    const tileCount = 20;
    const gridSize = 20;

    let px = 10, py = 10;       // Kígyó eleje
    let xv = 0, yv = 0;         // Mozgás iránya
    let appleX = 15, appleY = 15;   // Alma pozíciója
    let tail = 5;
    let snake = [];
    let previousDirection = { x: 100, y: 100};
    let isStarted = false;
    let points = 0;

    setInterval(() => {
        game();
    }, 67);

    document.addEventListener('keydown', keyDown);

    function keyDown(event) {
        isStarted = true;

        // BAL FELSŐ SAROK AZ ORIGO
        switch (event.keyCode) {
            case 37:    // bal
                xv = -1; yv = 0;
                break;
            case 38:    // fel
                xv = 0; yv = -1;
                break;
            case 39:    // jobb
                xv = 1; yv = 0;
                break;
            case 40:    // le
                xv = 0; yv = 1;
                break;
        }

        if (xv === previousDirection.x * -1 || yv === previousDirection.y *     -1) {
            xv = previousDirection.x;
            yv = previousDirection.y;
        }

        previousDirection = {
            x: xv,
            y: yv
        };
    }

    function game() {
        px += xv;
        py += yv;

        if (px > tileCount - 1) px = 0;
        if (px < 0) px = tileCount - 1;
        if (py > tileCount - 1) py = 0;
        if (py < 0) py = tileCount - 1;

        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = 'lime';        
        for (let i = 0; i < snake.length; i++) {
            context.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize - 2, gridSize - 2);

            if (isStarted && px === snake[i].x && py === snake[i].y) {                
                gameOver();
            }
        }

        // Belerakom a legfrissebb pozíciót
        snake.push({
            x: px,
            y: py
        });

        // Kitörlöm a régi, felesleges pozíciókat
        while (snake.length > tail) {
            snake.shift();
        }

        if (px === appleX && py === appleY) {
            tail++;
            points++;
            console.log(points);

            const apple = getNewApple();
            appleX = apple.x;
            appleY = apple.y;
        }

        context.fillStyle = 'red';
        context.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
    }

    function getNewApple() {
        let x = Math.floor(Math.random() * tileCount);
        let y = Math.floor(Math.random() * tileCount);

        const isHeadCollided = px === x && py === y;
        const isSnakeCollided = snake.some(t => t.x === x && t.y === y);
        
        while (isSnakeCollided || isHeadCollided) {
            x = Math.floor(Math.random() * tileCount);
            y = Math.floor(Math.random() * tileCount);
        }

        return {
            x, y
        };
    }

    function gameOver() {
        tail = 5;
        console.log('GAME OVER');
    }
};