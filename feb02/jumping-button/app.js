const button = $('button');
const input = $('input');

function getRandomText(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


input.keyup(function () {
    const text = getRandomText($(this).val().length);
    $(this).val(text);
});

button.hover(function () {
    const pos = getRandomPosition();

    $(this)
        .css('left', pos.left)
        .css('top', pos.top);
});

button.focus(function () {
    $(this).blur();
});

button.click(function () {
    alert('Jár a csicskalángos');
});

function getRandomPosition() {
    const width = $(document).width();
    const height = $(document).height();

    return {
        left: Math.floor(Math.random() * Math.floor(width)),
        top: Math.floor(Math.random() * Math.floor(height)),
    };
}