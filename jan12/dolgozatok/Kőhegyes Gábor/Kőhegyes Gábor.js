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
let playerPoints = 0;
let computerPoints = 0;
let playerCards = [];
let computerCards = [];
var chars = [];
var answer;
loose = false;
firstTwo();
while (loose != true) {
    if(playerPoints <= 21 && computerPoints <= 21)
        {
            dialog();

            if(answer == "I" || answer == "i")
            {
                requestCard();
                scoreSystem();
            }
            else if(answer == "N" || answer == "n")
            {
                scoreSystem();
                let PDifference = 21-playerPoints;
                let CDifference = 21-computerPoints;
                console.log("Terites: ");
                if(PDifference < CDifference)
                {
                loose = true;
                console.log("A jatekos nyert " + playerPoints + " ponttal.");
                }
                else
                {
                loose = true;
                console.log("A bank nyert " + computerPoints + " ponttal.");  
                }
            }
        }
        else if(playerPoints > 21)
        {
            loose = true;
            console.log("Kiestél geci!");
        }
        else if(computerPoints > 21)
        {
            loose = true;
            console.log("Kiesett a bank bazdmeg!");
        } 
}
function firstTwo()
{
    for (var i = 0; i < 2; i++) {
        playerCards.push(CARDS[getCard()].symbol);
        computerCards.push(CARDS[getCard()].symbol);
    }
}
function requestCard()
{
    playerCards.push(CARDS[getCard()].symbol);
    /*if(computerChance == true)*/ computerCards.push(CARDS[getCard()].symbol);
}
function getCard()
{
    let number =  Math.floor(Math.random() * CARDS.length);

    return number;
}
function dialog()
{
    console.log('----------------------------------------');
    console.log('A te kártyaid:', playerCards.join(' '));
    console.log();
    computerChars();
    console.log('A bank kártyai:', chars.join(' '));
    console.log();
    answer = readline.question('Kersz meg lapot?I/N  ');
}
function scoreSystem()
{
    playerPoints = 0;
    computerPoints = 0;
    for (var i = 0; i < playerCards.length; i++) {
        playerPoints +=getValue(playerCards[i]);
    }
    for (var i = 0; i < computerCards.length; i++) {
        computerPoints += getValue(computerCards[i]);
    }
}
function getValue(symbol)
{
    return CARDS.find(c => c.symbol === symbol).value;
}


function computerChance()
{
    let chance =  Math.floor(Math.random() * 100);
    if(chance < 50)
    {
         return true;
    }    
    else return false;
}
function computerChars()
{
    chars = [];
    chars[0] = computerCards[0];
    for (var i = 1; i < computerCards.length; i++) {
        chars[i] = "X";
    }
}
