let currentTurn = 'X';

$('table td').click(function () {
    const td = $(this);

    if (td.text() !== '') {
        return;
    }

    td.text(currentTurn);
    td.addClass(getTurnClassName());      

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