$(document).ready(function () {

    const PRIZES = [
        { id: 1, prize: 5000, isCheckpoint: false },
        { id: 2, prize: 10000, isCheckpoint: false },
        { id: 3, prize: 20000, isCheckpoint: false },
        { id: 4, prize: 50000, isCheckpoint: false },
        { id: 5, prize: 100000, isCheckpoint: true },

        { id: 6, prize: 200000, isCheckpoint: false },
        { id: 7, prize: 300000, isCheckpoint: false },
        { id: 8, prize: 500000, isCheckpoint: false },
        { id: 9, prize: 800000, isCheckpoint: false },
        { id: 10, prize: 1000000, isCheckpoint: true },

        { id: 11, prize: 2000000, isCheckpoint: false },
        { id: 12, prize: 5000000, isCheckpoint: false },
        { id: 13, prize: 10000000, isCheckpoint: false },
        { id: 14, prize: 20000000, isCheckpoint: false },
        { id: 15, prize: 40000000, isCheckpoint: true }
    ];

    renderPrizes();

    function renderPrizes() {
        const source = $('#prizes-template').html();
        const template = Handlebars.compile(source);

        const prizes = PRIZES
            .map(o => {
                o.prize = o.prize.toLocaleString('hu', { maximumFractionDigits: 0 })
                return o;
            })
            .reverse();

        const html = template({ prizes });

        $('.right').append(html);
    }
});