

const MORSE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
};

// lesz egy morse kódsor
// azt konvertáljuk szöveggé

// ... --- ... => SOS

function morseToHuman(morse) {
    const chars = morse.split(' ');
    let text = '';

    for (const c of chars) {
        text += MORSE[c];
    }

    return text;
}

function humanToMorse(text) {
    // @TODO
}

// const code = '... --- ...';
// const text = morseToHuman(code);
// console.log(text);

console.log(Object.values(MORSE));