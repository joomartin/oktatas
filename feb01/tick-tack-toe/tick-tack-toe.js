let currentTurn = 'X';

$('table td').click(function () {
    const td = $(this);
    const tr = td.parent();

    const trIndex = $('table tr').index(tr);
    const tdIndex = tr.find('td').index(td);

    if (td.text() !== '') {
        return;
    }

    td.text(currentTurn);
    td.addClass(getTurnClassName());      

    const matrix = tableToMatrix();
    const points = getPoints(matrix, trIndex, tdIndex);

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

    if (leftPoints + rightPoints === 4)
        alert('Nyertél (viz)');

    if (upPoints + downPoints === 4)
        alert('Nyertél (fuggo)');
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