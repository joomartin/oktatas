let currentTurn = 'X';

$('table td').click(function () {
    const td = $(this);

    if (td.text() === '') {
        td.text(currentTurn);
        
        td.addClass(getTurnClassName());      

        flipTurn();
    }
});

function flipTurn() {
    if (currentTurn === 'X') {
        currentTurn = 'O';
    } else {
        currentTurn = 'X';
    }

    $('#current-turn')
        .text(currentTurn)
        .removeClass('red blue')
        .addClass(getTurnClassName());
}

function getTurnClassName() {
    return (currentTurn === 'X') ? 'red' : 'blue';
}