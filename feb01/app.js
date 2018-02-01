const matrix = [
    ['', '', '', 'x', ''],
    ['', '', '', 'x', ''],
    ['', '', '', 'x', 'o'],
    ['', '', '', '', ''],
    ['', '', '', 'x', '']
];

const pos = { i: 2, j: 3,  };
const current = 'x';

function up() {
    let points = 0;
    const j = pos.j;
    for (let i = pos.i - 1; i >= 0; i--) {
        if (matrix[i][j] !== current) {
            points = 0;
            break;
        } else {
            points++;
        }
    }

    return points;
}

function down() {
    let points = 0;
    const j = pos.j;
    for (let i = pos.i + 1; i < matrix.length; i++) {
        if (matrix[i][j] !== current) {
            points = 0;
            break;            
        } else {
            points++;
        }
    }

    return points;
}

const upPoints = up();
const downPoints = down();

console.log(upPoints + downPoints);