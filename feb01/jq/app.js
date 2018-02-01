const input = $('#name');

input.keyup(() => {
    $('#name-header').html('Hello, ' + input.val());
});

const paragraphs = $('.paragraph');

$.each(paragraphs, (i, p) => {
    $(p).text('asdf');
});