/**
 * A program jól működik, szép munka.
 * A logika is egyszerű, és átlátható.
 * 
 * A kód szervezés viszont nagyon gyenge, minden a while cikluson belül van, csak egy függvényt emeltél ki, amit én erőszakoltam ki belőled.
 * A különböző blokkokat ki lehetett volna emelni, pl.:
 *  - külön a dealer és a player logikáját
 *  - ami azonos a dealer és a player közt, azt általánosítani
 *  - külön a végeredmény meghatározását
 *  - külön a pontok számolásást stb
 * 
 * A logika jó, de ez még így nem elég igényes. Az igényes fejlesztésnek része az a hozzállás, hogy kis építő elemekből
 * hozunk létre nagyobb részeket. És ezeket az építő elemeket próbáljuk általánosan, újrahasznosítható formában megcsinálni.
 * 
 * Tudom, hogy ezt még nehéz elképzelni, mert ez egy kicsi projekt, amiből nem akarunk semmit újrahasznosítani stb.
 * 
 * De gondolj pl egy játékra, mondjuk egy lol, vagy wow szintű dologra.
 * Ott mondjuk van 1 millió soros kódbázis, gondolj bele, ha senki nem foglalkozna a normális kód szervezéssel az kb 4 millió sor lenne
 * És ha előjön egy bug, lehet, hogy nem egy helyen, hanem 3-4-5 helyen kell javítani.
 * Ha fejlesztenek egy új featuret, lehet, hogy nem 1, hanem 10 helyen igényelne módosítást.
 * 
 * Úgy tudom kb 1 sikeres játékra jut 10-15 bukás. Na annak a 10-15 cégnek igénytrlen a csapata és nem bírják
 * a gyors fejlődést (meg persze üzleti okai is lehetnek stb).
 * 
 * Az igényes kód szervezés mindig az elején jelent egy kis plusz időt, és utána sokszorosan megtérül
 */


const readline = require('readline-sync');

const CARDS = [
    { value: 2, symbol: '2', },
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
let playercards = [];
let playersum = 0;
let dealercards = [];
let dealersum = 0;
console.log('Welcome to the blackjack game by Gergely!');
for (i = 0; i < 2; i++) {
    playercards[i] = CARDS[Math.floor(Math.random() * CARDS.length)];
    dealercards[i] = CARDS[Math.floor(Math.random() * CARDS.length)];
}
console.log('Your initial cards: '+ playercards[0].symbol + ' ' + playercards[1].symbol);
for (const i of playercards) {
    playersum += i.value;
}
console.log('Overall value: '+playersum);
console.log('The dealers initial cards: '+ dealercards[0].symbol + ' ' + '(X)');
for (const i of dealercards) {
    dealersum += i.value;
}
while (true) {
    const answer = readline.question('Would you like another card? (y/n)');
    if (answer == 'y') {
        let temporal =  CARDS[Math.floor(Math.random() * CARDS.length)];
        playercards.push(temporal);
        playersum = draw(playercards);
        console.log('You draw: '+temporal.symbol);
    }
    if (playersum > 21) {
        console.log('Your cards are: ');
        for (const i of playercards) {
            console.log(i.symbol);
        }
        console.log('Overall value: '+playersum);
        console.log('Your sum of cards have exeeded the maximum of 21. You lose.');
        break;
    }
    if ((dealersum <= 14) || ((playersum - dealersum) >= 5)) {
        console.log('The dealer decides to draw a card.');
        let temporal =  CARDS[Math.floor(Math.random() * CARDS.length)];
        dealercards.push(temporal);
        dealersum = draw(dealercards);
        if (dealersum > 21) {
            console.log('The dealers cards are: ');
            for (const i of dealercards) {
                console.log(i.symbol);
            }
            console.log('Overall value: '+dealersum);
            console.log('The dealers sum of cards have exeeded the maximum of 21. You win.');
            break;
        }
    } else {
        console.log('The dealer doesnt draw a card.');
        if (answer != 'y') {
            console.log('Nobody draws, you both reveal your cards.');
            console.log('Your cards are: ');
            for (const i of playercards) {
                console.log(i.symbol);
            }
            console.log('Overall value: '+playersum);
            console.log('The dealers cards are: ');
            for (const i of dealercards) {
                console.log(i.symbol);
            }
            console.log('Overall value: '+dealersum);
            if (playersum > dealersum) {
                console.log('You win!');
                break;
            } else if (dealersum > playersum) {
                console.log('You lose!');
                break;
            } else if (playersum === dealersum) {
                console.log('Draw!');
                break;
            }
        }
    }
    console.log('Your cards are: ');
    for (const i of playercards) {
        console.log(i.symbol);
    }
    console.log('Overall value: '+playersum);
    console.log('The dealers cards are: ');
    console.log(dealercards[1].symbol);
    for (i = 0; i < dealercards.length-1; i++) {
        console.log('(X)');
    }
}
function draw(cards) {
    let sum = 0;
    for (const c of cards) {
        sum += c.value;
    }
    if (sum > 21) {
        for (const c of cards) {
            if (c.symbol === 'A') {
                sum -= 10;
            }
        }
    }
    return sum;

    /**
     * Amiket órákon is szoktam mutatni, map filter, reuct stb függvények azért jók, mert kevesebb logikát igényelnek
     * Ezt a függvényt fel lehetne írni így is pl.:
     * 
     * const sum = cards.reduce((sum, c) => sum + c.value, 0);
        if (sum < 21) return sum;

        return sum - cards
            .filter(c => c.symbol === 'A')
            .reduce((sum, c) => sum + c.value, 0);
     *
     * Az egész logika EGY SZINTEN van
     * Egy valódi projektben ez HATALMAS előny 
     */

    
}
