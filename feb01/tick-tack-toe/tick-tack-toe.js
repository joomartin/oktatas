let currentTurn = 'X';
let isGameOver = false;

$('table td').click(function () {
    if (isGameOver) {
        return;
    }

    const td = $(this);
    const tr = td.parent();

    const trIndex = $('table tr').index(tr);
    const tdIndex = tr.find('td').index(td);

    if (td.text() !== '')
        return;

    td.text(currentTurn);
    td.addClass(getTurnClassName());

    const matrix = tableToMatrix();
    const points = getPoints(matrix, trIndex, tdIndex);

    if (isDraw(matrix)) {
        alert('Dontetlen');
    }

    flipTurn();
});

function flipTurn() {
    currentTurn = (currentTurn === 'X') ? 'O' : 'X';

    $('#current-turn')
        .text(currentTurn)
        .removeClass('red blue')
        .addClass(getTurnClassName());
}

function getTurnClassName() {
    return (currentTurn === 'X') ? 'red' : 'blue';
}

function tableToMatrix() {
    let matrix = [];
    $('table tr').each(function (i) {
        const tr = $(this);
        matrix[i] = [];

        tr.find('td').each(function () {
            const td = $(this);
            matrix[i].push(td.text());
        });
    });

    return matrix;
}

function getPoints(matrix, rows, columns) {
    const upPoints = up(matrix, rows, columns);
    const downPoints = down(matrix, rows, columns);

    const rightPoints = right(matrix, rows, columns);
    const leftPoints = left(matrix, rows, columns);

    const rightUpPoints = rightUp(matrix, rows, columns);
    const leftDownPoints = leftDown(matrix, rows, columns);

    const leftUpPoints = leftUp(matrix, rows, columns);
    const rightDownPoints = rightDown(matrix, rows, columns);

    if (leftPoints + rightPoints === 4) {
        gameOver();
    }

    if (upPoints + downPoints === 4) {
        gameOver();
    }

    if (rightUpPoints + leftDownPoints === 4) {
        gameOver();
    }

    if (leftUpPoints + rightDownPoints === 4) {
        gameOver();
    }
}

function up(matrix, rows, columns) {
    let points = 0;
    for (let i = rows - 1; i >= 0; i--) {
        if (matrix[i][columns] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function down(matrix, rows, columns) {
    let points = 0;
    for (let i = rows + 1; i < matrix.length; i++) {
        if (matrix[i][columns] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function right(matrix, rows, columns) {
    let points = 0;
    for (let i = columns + 1; i < matrix[rows].length; i++) {
        if (matrix[rows][i] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function left(matrix, rows, columns) {
    let points = 0;
    for (let i = columns - 1; i >= 0; i--) {
        if (matrix[rows][i] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function rightUp(matrix, rows, columns) {
    let points = 0;
    let j = columns + 1;

    for (let i = rows - 1; i >= 0; i--) {
        if (matrix[i][j++] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function leftDown(matrix, rows, columns) {
    let points = 0;
    let j = columns - 1;

    for (let i = rows + 1; i < matrix.length; i++) {
        if (matrix[i][j--] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function leftUp(matrix, rows, columns) {
    let points = 0;
    let j = columns - 1;

    for (let i = rows - 1; i >= 0; i--) {
        if (matrix[i][j--] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function rightDown(matrix, rows, columns) {
    let points = 0;
    let j = columns + 1;

    for (let i = rows + 1; i < matrix.length; i++) {
        if (matrix[i][j++] === currentTurn) {
            points++;
        } else {
            return points;
        }
    }

    return points;
}

function gameOver() {
    isGameOver = true;
    setTimeout(() => {
        const confirmValue = confirm(`${currentTurn} nyert! Akarsz ujra jatszani?`);

        if (confirmValue) {
            window.location.reload();
        }
    }, 0);
}

function isDraw(matrix) {
    return !isGameOver && matrix
        .map(arr => arr.some(item => item === ''))
        .every(item => !item);
}