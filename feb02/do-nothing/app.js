const counter = $('#counter');
const error = $('h1.error');

let date;
let interval;
let isOver = false;

resetDate();
setCounter(date);

interval = setInterval(function () {
    if (date.format('mm:ss') === '00:00') {
        clearInterval(interval);
        alert('Nyertel!!!');
        isOver = true;
    } else if (date.format('mm:ss') === '00:01') {
        $(document).trigger('click');
    }else {
        date = moment(date).subtract(1, 's');
        setCounter(date);
    }
}, 1000);

$(document).click(function () {
    eventHappened();
});

$(document).keypress(function () {
    eventHappened();
});

$(document).mousemove(function () {
    eventHappened();
});

function eventHappened() {
    if (isOver) {
        return;
    }

    error.show().fadeOut(4000);
    resetCounter();
}

function resetCounter() {
    resetDate();
    setCounter(date);
}

function setCounter(date) {
    counter.text(date.format('mm:ss'));
}

function resetDate() {
    date = moment(2, 'm');
}