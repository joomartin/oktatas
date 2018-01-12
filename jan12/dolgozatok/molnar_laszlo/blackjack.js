/**
 * Pár sört nyugodtan vehetsz a Daninak!
 */

const readline = require('readline-sync');

class Player {
    constructor(cards = [], sum = 0) {
        this.cards = cards;
        this.sum = sum;
    }
    new_card(write) {
        let card = Math.floor(Math.random() * CARDS.length - 2);
        if (card < 10) {
            card = card + 2;
            this.cards.push(CARDS[card].symbol);
            if (write)
                console.log('A ' + CARDS[card].symbol + ' lapot húztad');
            this.sum += CARDS[card].value;
        }
        else if (card >= 10) {
            this.sum += 10;
            this.cards.push(CARDS[card].symbol);
            if (write)
                console.log('A ' + CARDS[card].symbol + ' lapot húztad');
        }
        else
            this.sum += 11;

        return card;
    }
    new_card_kiir_nelkul() {
        let card = Math.floor(Math.random() * CARDS.length - 2);
        if (card < 10) {
            card = card + 2;
            this.cards.push(CARDS[card].symbol);
            this.sum += CARDS[card].value;
            console.log('A ' + CARDS[card].symbol + ' lapot húzta a bank');
        }
        else if (card >= 10) {
            this.sum += 10;
            this.cards.push(CARDS[card].symbol);
            console.log('A ' + CARDS[card].symbol + ' lapot húzta a bank');
        }
        else
            this.sum += 11;

        return card;
    }
    check_new_card(ertek) {
        if (ertek + this.sum > 21) {
            return -1;
        }
        if (ertek + this.sum === 21) {
            return 0;
        }
        if (ertek < 21) {
            return 1;
        }
    }
    start() {
        this.new_card(true);
        this.new_card(true);
        if (this.sum === 21) {
            return false;
        }
        return true;
    }
    write_cards() {
        let cards_str = '';
        for (let i in this.cards) {
            cards_str = this.cards.join(', ');
        }
        return cards_str;
    }
    findcard(asd) {
        return CARDS[asd].value;
    }
    sum_ad() {
        return this.sum;
    }
    card_pieces() {
        return this.cards.length;
    }
}
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
let player1 = new Player();
let bank = new Player();
player1.start();
bank.new_card(false);
bank.new_card_kiir_nelkul();
console.log('A bank kezdő lapja: ' + bank.cards[0]);
console.log(player1.write_cards());
console.log('A lapjaid értéke: ' + player1.sum);
let bank_ker_e = true;
let te_kersz_e = true;
let valaki_tullepte = false;
while (true) {
    if (te_kersz_e) {
        const answer = readline.question('Kérsz lapot?(Y or N)');
        if (answer == 'Y') {
            if (player1.check_new_card(player1.new_card(false)) > -1) {
                console.log('Ezek a lapjaid: '+player1.write_cards());
                console.log();
                console.log('A lapjaid értéke: ' + player1.sum);
                if (player1.sum_ad() === 21)
                    Console.log('Winner Winner Chicken Dinner!!!');
                break;
            }
            else {
                console.log('túl lépted!');
                break;
            }
        }
        if (answer === 'N') te_kersz_e = false;
        else
            console.log('Hibás utasitás!');
        if (bank_ker_e) {
            if (bank.sum_ad() < 16) {
                if (bank.check_new_card(bank.new_card()));
                else {
                    valaki_tullepte = true;
                    console.log('A bank túlllpte!');
                    break;
                }
            }
            else
                bank_ker_e = false;
        }
        if (!te_kersz_e && !bank_ker_e)
            break;
    }
}
if (!te_kersz_e && !bank_ker_e) {
    break;
}
if (valaki_tullepte) {
    if (!te_kersz_e && !bank_ker_e) {
        if (bank.sum_ad() < 21 && player1.sum_ad < 21) {
            if (player1.sum_ad() > bank.sum_ad()) {
                console.log('Winner Winner Chicken Dinner!!!');
                console.log('A te lapjaid: ' + player1.write_cards());
            }
            else {
                console.log('Vesztettél!');
                console.log('A bank lapjai: ' + bank.write_cards());
            }
        }
    }
}