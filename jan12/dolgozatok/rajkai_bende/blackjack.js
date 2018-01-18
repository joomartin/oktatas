/**
 * Nagyon jó lett! Külön pont, hogy még a mennyiséggel is foglalkoztál
 * Futtatva terminálból, a tied a legátláthatóbb az összes közül
 * A kód minősége is egész jó, az átlagnál sokkal jobb.
 * 
 * A game függvény egy kicsit hosszú lett, de a többi rendben van.
 * 
 */


const readline = require('readline-sync')
// const answer = readline.question("Kérsz lapot?")
// Math.floor(Math.random() * CARDS.length)

const CARDS = [
    { value: 2, symbol: '2', quantity: 4 },
    { value: 3, symbol: '3', quantity: 4 },
    { value: 4, symbol: '4', quantity: 4 },
    { value: 5, symbol: '5', quantity: 4 },
    { value: 6, symbol: '6', quantity: 4 },
    { value: 7, symbol: '7', quantity: 4 },
    { value: 8, symbol: '8', quantity: 4 },
    { value: 9, symbol: '9', quantity: 4 },
    { value: 10, symbol: '10', quantity: 4 },
    { value: 10, symbol: 'J', quantity: 4 },
    { value: 10, symbol: 'Q', quantity: 4 },
    { value: 10, symbol: 'K', quantity: 4 },
    { value: 11, symbol: 'A', quantity: 4 }      // 1
];

class Logic {
    constructor(array, symbol, sum) {
        this.array = array
        this.symbol = symbol
        this.sum = sum
    }

    draw() {
        let random = 0
        /**
         * Itt azét kicsit túlzás a végtelen ciklus
         * Az maximum a játék fő ciklusánál oké
         * Ezt egyébként rekurzívan lehet a legszebben megoldani, azt még nem néztük
         */
        while (true) {
            random = Math.floor(Math.random() * CARDS.length)

            /**
             * Itt kétszer csökkented a mennyiséget. Ez szerintem gondot okoz
             */
            CARDS[random].quantity--
            if (CARDS[random].quantity-- > 0)
                break
        }
        let card = CARDS[random]
        this.symbol += card.symbol + " "
        this.sum += card.value
        return this.array.push(card)
    }
}

/**
 * Az a baj, hogy így nem sok haszna van annak, hogy csináltál egy ősosztály
 * Illetve, ha ugyanaz a függvényed, akkor nem kell a gyerek osztálynál újra megírni.
 * Tehát a konstruktort is meg a draw is ki lehet törölni mindkét osztályból
 * 
 * És akkor így csak a Dealer osztályban marad az ai() nevű függvény
 */

class Player extends Logic {
    constructor(array, symbol, sum) {
        super(array, symbol, sum)
    }
    draw() {
        return super.draw()
    }
}

class Dealer extends Logic {
    constructor(array, symbol, sum) {
        super(array, symbol, sum)
    }
    draw() {
        return super.draw()
    }

    ai() {
        if (this.sum < 15) {
            console.log("The dealer drew.")
            this.draw()
            return true
        }
        else if (this.sum > 14 && this.sum < 17) {
            let random = Math.floor(Math.random() * 2)
            if (random === 2) {
                console.log("The dealer drew.")
                this.draw()
                return true
            }
        }
        else
            return false
    }
}

function game() {
    let playercards = []
    let dealercards = []
    let playerturn = true
    let dealerturn = true

    // Ezt meg lehetne oldani default értékekketl a konstruktorban
    const player = new Player([], "", 0)
    const dealer = new Dealer([], "", 0)

    for (let i = 0; i < 2; i++) {
        player.draw()
        dealer.draw()
    }

    while (true) {
        let dealersymbol = ""
        dealercards = dealer.array
        playercards = player.array

        for (let i = 0; i < dealer.array.length; i++) {
            if (i === 0)
                dealersymbol += dealer.array[0].symbol + " "
            else
                dealersymbol += "X "
        }

        [
            dealer.array[0].symbol,
            ...dealer.array.slice(1).map(c => 'X')
        ] 

        // 1. slice -> array
        // 2. map -> array
        // 3. ... szétszedi

        
        /**
         *   [1,X,X,X,X]
         */

        /**
         * Ennek egy modernebb megoldása:
         * 
         * const dealerSymbol = [
         *      dealer.array[0].symbol,
         *      ...delaer.array.slice(1).map(c => 'X)
         * ];
         */

        show(dealersymbol, false)
        let answer = ""
        if (playerturn === true) {
            answer = readline.question("Do you want to draw?(yes/no) ").toLowerCase()
        }
        if (dealerturn === true) {
            dealerturn = dealer.ai()
        }

        if (answer === "y" || answer === "yes") {
            player.draw()
        }
        else {
            playerturn = false
            if (dealerturn === false) {
                show(dealer.symbol)
                if (dealer.sum < player.sum && dealer.sum < 22 && player.sum < 22)
                    console.log("YOU WON")
                else if (dealer.sum === player.sum)
                    console.log("DRAW")
                else
                    console.log("DEALER WON")
                break;
            }
        }

        player.sum = ace(player.array, player.sum)
        dealer.sum = ace(dealer.array, dealer.sum)

        if (player.sum >= 21) {
            show(dealer.symbol)
            if (player.sum === 21)
                console.log("YOU WON")
            else
                console.log("GAME OVER")
            break;
        }

    }

    function ace(array, sum) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].value === 11 && sum > 21) {
                array[i].value = 1
                sum -= 10
            }
        }
        return sum

        // if (sum < 21) return sum;

        // const aceValue = array
        //     .filter(c => c.symbol === 'A')
        //     .reduce((sumAce, c) => {
        //         return sum > 21 ? sumAce + 10 : sumAce;
        //     }, 0);

        // return sum - aceValue;
        
        
        

        /**
         * Itt tipikusan jobb az of for -t haszálni:
         * for (const c of array) {
         *      if (c.value) ...
         * }
         * 
         * Ennek egy modernebb megoldása lehet:
         * 
            if (sum < 21) return sum;

            return sum - array
                .filter(c => c.symbol === 'A')
                .reduce((sum, c) => sum + c.value, 0);

         *  Ez így egy kicsit hatékonyabb is, mert te a cikluson belül vizsgálod, hgoy a sum nagyobb -e 21 -nél
         * Tehát ha 12 pontod van, akkor vég mész az összes kártyán, de nem csinálsz semmit.
         * Ezt még a ciklus előtt le lehetne vizsgálni.
         */
    }

    function show(dealersymbol, end = true) {
        console.log("-------------------------")
        console.log(`Player value: ${player.sum}`)
        if (end)
            console.log(`Dealer value: ${dealer.sum}`)
        console.log()
        console.log(`Player: ${player.symbol}`)
        console.log(`Dealer: ${dealersymbol}`)
    }

}

game()