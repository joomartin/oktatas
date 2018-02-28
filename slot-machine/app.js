const CHOOSES = [
    { id: 1, symbol: 'A', active: true },
    { id: 2, symbol: 'B' },
    { id: 3, symbol: 'C' },
    { id: 4, symbol: 'D' }
];

$(document).ready(function () {
    createChooses();

    function createChooses() {
        const source = $('#choose-template').html();
        const template = Handlebars.compile(source);

        const html = template({ chooses: CHOOSES });
        
        for (let i = 0; i < 3; i++) {
            $('.container').append(html);
        }
    }

    function getRandomChoose() {
        return CHOOSES[Math.floor(Math.random() * CHOOSES.length) + 0];
    }

    $('#roll').click(function () {
        // kell nekem midegyik oszlopba egy random kép
        $('.container .item')
            .removeClass('active')
            .addClass('inactive');

        const rolls = [
            getRandomChoose(), getRandomChoose(), getRandomChoose()
        ];

        for (const index in rolls) {
            $('.container div')
                .eq(index)
                .find('.item[data-id="' + rolls[index].id + '"]')
                .removeClass('inactive')
                .addClass('active');
        }

        if (isWin(rolls)) {
            setTimeout(() => {
                alert('Nyertél');
            }, 0);
        } else {
            console.log('Vesztettél');
        }
    });

    function isWin(rolls) {
        return rolls.every(r => r.id === rolls[0].id);

        // const firstId = rolls[0].id;
        // for (const roll of rolls) {
        //     if (firstId !== roll.id) {
        //         return false;
        //     }
        // }

        // return true;
    }
});