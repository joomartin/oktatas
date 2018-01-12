/**
 * Ezen sajnos nincs mit értékelni, a legalapabb dolgok is hiányoznak
 * Sok helyen ráadásul teljesen értelmetlen dolgokat próbálsz csinálni pl.:
 * input('Y' || 'y')
 * CARDS(11, 'A')
 *  
 * CARDS(11,'A')=1 -> Itt pl megpróbálasz meghívni egy TÖMBÖT, mintha függvény lenne, és utána az 1 értéket próbálod adni neki, mintha egy változó lenne
 * 
 * Ráadásul, ha elindítom fatal error -val megdöglik
 */

const readline = require('readLine-sync');
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
    { value: 11, symbol: 'A' }
];
var sum=0;
function initialdeal(){
    var randomItem = CARDS[Math.floor(Math.random()*CARDS.length)];  
        randomItem = CARDS[Math.floor(Math.random()*CARDS.length)];  
}
function housedeal(){
    var randomItem = CARDS[Math.floor(Math.random()*CARDS.length)];  
        randomItem = CARDS[Math.floor(Math.random()*CARDS.length)];  
}
while (true) {
    if(sum<21){
        const answer =readline.question('Kersz lapot? ');

        /**
         * Egyrész nem létezik input() nevá függvény
         * Másrészt olyan nincs, hogy egy függvénybe egy || kifejezést írok
         * Itt az answer változó értékét akartad szerintem vizsgálni
         */

        if(input('Y' || 'y')){

        }else if(input('N' || 'n')){
            break;
        }
    }
    if(sum>21){
        console.log('Game over!');
        break;
    }

    /**
     * a CARDS az nem egy függvény, hanem egy tömb, tehát nem hívhatod meg CARDS() -ként
     * ha egy tömb elemre akarsz hivatkozni, akkor: CARS[0]
     */

    if(randomItem==CARDS(11,'A')){
        Console.log('11 vagy 1 az erteke?')
        if(input('1')){
            return (CARDS(11,'A')=1);
        }else if(input('11')){
            return (CARDS(11,'A')=11);
        }
    }
}