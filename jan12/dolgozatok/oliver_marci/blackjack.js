/**
 * Tényleg egész jól néz ki az anyja picsáját!
 * 
 * Még azért nem tökéletes, mert ha vesztek utána is megy tovább a játék, meg mindig látom a dealer lapjait
 * Úgy hogy akadnak benne kisebb buktatók, de nem rossz
 * 
 * Néha majd nyomjátok meg a 'Shift + Alt + F' -et.
 * 
 * Ami furcsa, hogy pár függvény bizonyos esetben ad vissza értéket, bizonsoy esetben viszont nem.
 * Ezt elég nehéz megérteni. Ilyenek pl.:
 *  - dealerAI
 *  - gameStateLogic
 * 
 * De amúgy tényleg jó lett. Főleg úgy, hogy nem is voltatok itt az alapoknál
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

let playerCards = [];
let bankCards = [];

function getRandomCards()
{
    let card = Math.floor(Math.random() * CARDS.length);
    return card;

    /**
     * Itt felesleges a card változó
     * 
     * return Math.floor(Math.random() * CARDS.length);
     */
}

function addStarterCards()
{
    for (let i = 0; i < 2; i++)
        {
            playerCards[i] = CARDS[getRandomCards()];
            bankCards[i] = CARDS[getRandomCards()];
        }
}

function printCards()
{
    let playerCardsForDisplay;
    let bankCardsForDisplay;

    playerCardsForDisplay = playerCards.map(c => c.symbol);
    bankCardsForDisplay = bankCards.map(c => c.symbol);

    
    console.log("| A bank kártyái: ", bankCardsForDisplay.join(" | "));
    console.log("| A te kártyáid: ", playerCardsForDisplay.join(" | "));

    /**
     * Felesleges külön let ..., és utána értéket adni, mehet egybe:
     * 
     * let playerCardsForDisplay = playerCards.map(c => c.symbol);
     * 
     * De akár átmeneti változók nélkül is meg lehet csinálni:
     * 
     * console.log("| A bank kártyái: ", bankCards.map(c => c.symbol).join(" | "));
     */
}

function dealerAI(playerscore, dealerscore)
{
    let sum = sumScore();
    let isContinue = false;

    if (playerscore > dealerscore) {
        if (playerscore >= 18) 
        {
            GG(sum.dealerscore,sum.playerscore);
            return isContinue;
        }
        else if (playerscore < 18)
        {
            addCard("bank");
            GG(sum.dealerscore,sum.playerscore);
        }
    }
    else
    {
        GG(sum.dealerscore,sum.playerscore);
        return isContinue;
    }

    /**
     * az isContinue változó felesleges, mehet helyette return false;
     * az else if (playerscore < 18) elég lenne egy sima else
     * Illetve az 'else if(playerscore < 18)' -ba nem kéne return true ?
     * 
     * Ha igen, akkor felesleges a külső else ág is:
     * 
     * if (playerscore > dealerscore) {
     *      if (playerscore >= 18) {
     *          ...
     *          return false;
     *      } else  {
     *          return true;
     *      }
     * }
     * 
     * ...
     * return false;
     * 
     * Nem nagy módosítások, de egy kicsit egyszerűbb, meg átláthatóbb lesz tőle az összkép
     */
}

function calculateScore(party)
{
    let score = 0;
    if (party == "player") {
        for (let i = 0; i < playerCards.length; i++) 
        {
            score = playerCards[i].value;
        }
    }
    else
    {
        for (let i = 0; i < bankCards.length; i++) 
            {
                score = bankCards[i].value;
            }
    }

    return score;

    /**
     * Ez a függvény szarrá van duplikálva, lehetne így is:
     * 
     * function getPoints(cards) {
     *      let sum = 0;
     *      for (const c of cards) {
     *          sum += c.value;
     *      }
     * 
     *      return sum;
     * }
     * 
     * Használat:
     * 
     * const playerPoints = getPoints(playerCards);
     * const bankPoints = getPoints(bankCards);
     */
}

function gameStateLogic()
{
    let sum = sumScore();
    let answer = readline.question("- - > Kersz lapot? (i / n): ");
    answer = answer.toUpperCase();
    let isContinue = false;

    if (answer == "I") 
    {
        addCard("player");
        dealerAI(calculateScore("player"), calculateScore("bank"));
        printCards();
    }
    else
    {
        dealerAI(calculateScore("player"), calculateScore("bank"));
        printCards();
        GG(sum.dealerscore,sum.playerscore);
        return isContinue;
    }
}

function addCard(party)
{
    if (party == "player") {
        playerCards.push(CARDS[getRandomCards()]);
    }
    else
    {
        bankCards.push(CARDS[getRandomCards()]);
    }

    /**
     * Itt felesleges a party változó, és az if
     * Át lehet adni a tömböt is, amibe új lapot akarsz osztani:
     * 
     * function addCard(cards) {
     *      cards.push(CARDS[getRandomCards()]);
     * }
     * 
     * Használat:
     * addCard(playerCards);
     * addCard(bankCards);
     */
    
}

function sumScore()
{
    let playerscore = 0;
    let dealerscore = 0;

    for (let i = 0; i < playerCards.length; i++) 
        {
            playerscore += playerCards[i].value;
        }
    
    for (let i = 0; i < bankCards.length; i++) 
        {
            dealerscore += bankCards[i].value;
        }

    return  {playerscore, dealerscore};
    /*console.log("| A bank pontszáma: ", dealerscore);
    console.log("| A te pontszámod: ", playerscore);*/

    /**
     * EZ A FÜGGVYÉN FELESLEGES
     * Ugyanazt csinálja, mint a calculateScore. A kettőből csak az egyiket kéne megtartani
     */
}

function GG(dealerscore, playerscore)
{
    let isContinue = false;

    console.log("- - - > A játék véget ért < - - -");

    if (playerscore == 21) 
    {
        console.log("- - > Nyertél! :)");
    }
    else if(dealerscore == 21)
    {
        console.log("- - > Vesztettél! :(");
    }
    else if(playerscore > 21)
    {
        console.log("- - > Vesztettél! :(");
    }
    else if(dealerscore > 21)
    {
        console.log("- - > Nyertél! :)");
    }
    else if(playerscore < 21 && dealerscore < 21)
    {
        if(dealerscore > playerscore)
            {
                console.log("- - > Vesztettél! :(");
            }
        else
            {
                console.log("- - > Nyertél! :)");
            }
    }
    console.log("Bank: ",dealerscore, "Játékos: ",playerscore);
    return isContinue;
}

console.log("- - - > A játék elkezdődött < - - -");
addStarterCards();
printCards();


while (true) 
{
    if (gameStateLogic() == false) {
        break;
    }

    /**
     * Az ilyet úgy szokás vizsgálni, hogy
     * 
     * if (!gameStateLogic()) {
     *      ...
     * }
     */
}