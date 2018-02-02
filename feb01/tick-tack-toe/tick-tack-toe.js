let SIZE = 5;

let currentTurn = 'X';
let isGameOver = false;
let isFirstClick = true;

const audioGabor = document.getElementById('gabor-audio');
const audioMarci = document.getElementById('marci-audio');

createTable();

$('#set-size').click(function () {
    const size = $('#size').val();
    SIZE = size;

    createTable();
});

$('div.container').on('click', 'table td', function () {
    if (currentTurn === 'X') {
        playAudio(audioGabor, audioMarci);
    } else {
        playAudio(audioMarci, audioGabor);
    }

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

    if (!isGameOver && !isDraw(matrix)) {
        flipTurn();        
    }
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

    if (leftPoints + rightPoints === SIZE - 1) {
        gameOver();
    }

    if (upPoints + downPoints === SIZE - 1) {
        gameOver();
    }

    if (rightUpPoints + leftDownPoints === SIZE - 1) {
        gameOver();
    }

    if (leftUpPoints + rightDownPoints === SIZE - 1) {
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

    if (currentTurn === 'X') {
        playAudio(audioGabor, audioMarci);
    } else {
        playAudio(audioMarci, audioGabor);
    }

    setTimeout(() => {
        const confirmValue = confirm(`${currentTurn} nyert! Akarsz ujra jatszani?`);

        if (confirmValue) 
            window.location.reload();
    }, 0);
}

function isDraw(matrix) {
    return !isGameOver && matrix
        .map(arr => arr.some(item => item === ''))
        .every(item => !item);
}

function playAudio(toPlay, toPause) {
    return true;
    toPause.pause();

    toPlay.load();
    toPlay.play();
}

function createTable() {
    $('table').remove();
    const table = $('<table></table>');

    for (let i = 0; i < SIZE; i++) {
        let tr = $('<tr></tr>');

        for (let j = 0; j < SIZE; j++) {
            tr.append('<td></td>');
        }

        table.append(tr);        
    }

    $('div.container').append(table);    
}