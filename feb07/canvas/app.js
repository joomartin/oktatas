const canvas = document.getElementById('canv');
const context = canvas.getContext('2d');

const tileCount = 20;
const size = 40;

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

// context.fillStyle = 'green';
// context.fillRect(100, 100, 50, 50);

context.fillStyle = 'red';
for (let i = 0; i < tileCount; i++) {
    context.fillRect(i * size, 10 * tileCount, size - 2, size - 2);
}

context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'red';
context.font = '30px Arial';
context.fillText('Game Over', 320, 400);