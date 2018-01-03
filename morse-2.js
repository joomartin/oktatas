const MORSE = [
    { morse: '---', letter: 'O' },
    { morse: '...', letter: 'S' }
];

const word = 'SOS';
const morse = '... --- ...';
// => ... --- ...
console.log(decode(word));
console.log(encode(morse));


function decode(word) {
    const chars = word.split('');
    let result = '';

    for (const c of chars) {
        const obj = getMorse(c, 'letter');
        result += obj.morse + ' ';
    }

    return result;
}

function encode(morse) {
    const codes = morse.split(' ');
    let result = '';

    for (const c of codes) {
        const obj = getMorse(c, 'morse');
        result += obj.letter;        
    }

    return result;
}

function getMorse(value, property) {
    for (const morse of MORSE) {
        if (morse[property] === value) {
            return morse;
        }
    }
}