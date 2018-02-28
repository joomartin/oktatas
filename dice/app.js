const LEVELS = [
    { id: 1, balance: 10, betSize: 1, odds: 3 },
    { id: 2, balance: 50, betSize: 10, odds: 4 },
    { id: 3, balance: 100, betSize: 25, odds: 5 }
];

const TARGET = 6;

let currentLevel;

$(document).ready(function () {
    render('levels-template', { levels: LEVELS });

    $('body').on('click', '.set-level', function () {
        currentLevel = LEVELS.find(l => l.id == $(this).attr('id'));
        $('#level-selector').hide();

        render('game-template', { currentLevel });
    });

    function gameOver() {
        $('#result-text').text('Sajnáljuk, tönkre mentél!');

        toggleResultStatus('danger');

        $('#roll-dice').prop('disabled', true);
        return false;
    }

    $('body').on('click', '#roll-dice', function () {
        const roll = Math.floor(Math.random() * 6) + 1;
        $('#roll').text(roll);

        const results = {
            'win': {
                newBalance: currentLevel.balance + (currentLevel.betSize * currentLevel.odds),
                resultText: 'Nyertél!',
                statusClass: 'success'
            },
            'loose': {
                newBalance: currentLevel.balance - currentLevel.betSize,
                resultText: 'Vesztettél!',
                statusClass: 'danger'
            }
        };

        const key = roll === TARGET ? 'win' : 'loose';
        
        setBalance(results[key].newBalance)
        $('#result-text').text(results[key].resultText);

        toggleResultStatus(results[key].statusClass);

        if (currentLevel.balance <= 0) {
            gameOver();
        }
    });

    function setBalance(newBalance) {
        currentLevel.balance = newBalance;

        $('#balance-text').text('$' + currentLevel.balance);
    }

    function toggleResultStatus(status) {
        $('#result-text')
            .removeClass()
            .addClass(['alert-' + status, 'alert']);
    }

    function render(id, data) {
        const source = $('#' + id).html();
        const template = Handlebars.compile(source);

        $('#main').append(template(data));
    }
});