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
}