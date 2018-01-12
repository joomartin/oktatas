const readline = require('readline-sync');

const answer = readline.question('Kérsz lapot? ');

const CARDS = [
    { value: 2, symbol: '2' },
    { value: 3, symbol: '3' },
    { value: 4, symbol: '4' },
    { value: 5, symbol: '5' },
    { value: 6, symbol: '6' },
    { value: 7, symbol: '7' },
    { value: 8, symbol: '8' },
    { value: 9, symbol: '9' },
    { value: 10, symbol: '10' },
    { value: 10, symbol: 'J' },
    { value: 10, symbol: 'Q' },
    { value: 10, symbol: 'K' },
    { value: 11, symbol: 'A' }      // 1
];

while (true) {
    // if (...) {
    //        game over esetén
    //     break;
    // }

    // if (...) {
    //     senki nem kért több lapo
    //     break;
    // }
}


Math.floor(Math.random() * CARDS.length);