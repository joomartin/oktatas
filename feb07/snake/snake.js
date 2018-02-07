window.onload = function () {
    const canvas = document.getElementById('canv');
    const context = canvas.getContext('2d');

    const tileCount = 20;
    const gridSize = 20;

    let px = 10, py = 10;       // Kígyó eleje
    let xv = 0, yv = 0;         // Mozgás iránya
    let appleX = 15, appleY = 15;   // Alma pozíciója
    let tail = 5;

    setInterval(() => {
        game();
    }, 100);

    document.addEventListener('keydown', keyDown);

    function keyDown(event) {
        // BAL FELSŐ SAROK AZ ORIGO
        switch (event.keyCode) {
            case 37:    // bal
                break;
            case 38:    // fel
                break;
            case 39:    // jobb
                break;
            case 40:    // le
                break;
        }
    }

    function game() {
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'red';
        context.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
    }
};