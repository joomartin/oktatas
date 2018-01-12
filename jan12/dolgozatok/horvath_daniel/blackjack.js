/**
 * Kezdetben ezt írja:
 * 
 * A *5 lapot húzta a bank
 * A bank kezdő lapja: Q
 * 
 * Szerintem a bank mindkét kezdő lapját látom Q és 5
 * 
 * Ha kérek még lapot, kiírja, hogy "Hibás utasítás", pedig 'Y' adtam meg
 * 
 * A játéknak nincs normális vége, megállok pl 19 pontnál és a program leáll
 * Nem írja ki, hogy ki győzött
 * 
 * A számolással is van valami gubanc. Volt ilyen:
 * 
    2, Q
    A lapjaid értéke: 12
    Kérsz egy lapot(Y or N):Y
    A 7 lapot húztad
    túl lépted
 * 
 * 12 -re húztam 7 -et, és vesztettem :(
 * 
 * Észrevételek:
 * - !!!NEM HASZNÁLUNK MAGYAR VÁLTOZÓ NEVEKET!!! Az csak a suliban menő. Olyat meg végképp
 *   nem használunk, hogy 'te_kersz_e'
 * - Osztály neveket nagybetűvel kezdjük
 * - Függvény és változó neveket 'camelCase' stílusban írjuk, tehát nem 'new_card', hanem 'newCard'
 * 
 * Külalak:
 * - A while ciklus nagyon átláthatatlan, és érthetetlen, ezt te sem fogod érteni 3 hét múlva. 
 * - A program többi része egész jó.
 * 
 */



const readline = require('readline-sync');
class player {
    constructor(cards = [], sum = 0) {
        this.cards = cards;
        this.sum = sum;
    }
    new_card(write) {

        /**
         * FELESLEGESEN SZOPATOD MAGAD
         * 
         * A CARDS tömbben benne van minden, amire szükséged van, a kártyák értéke is, meg a szimbóluma is
         * Ha onnan dolgoznál nem lenne semmi teendőd. E helyett if -ekkel oldod a pontok számolását
         * Ejnye bejnye
         */

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
    new_card_kirr_nelkul() {
        /**
         * Ez a függvény ugyanaz, mint a fenti
         * Felesleges. Így két helyen kell karban tartanod ugyanazt a logikát
         * 
         * Ha ez egy valódi projekt lenne, a 15 sorból NAGYON NAGYON hamar 50 sor lesz.
         * És két daraba 50 soros függvényt karbantartani nem valami jó dolog
         */
        let card = Math.floor(Math.random() * CARDS.length - 2);
        if (card < 10) {
            card = card + 2;
            this.cards.push(CARDS[card].symbol);
            this.sum += CARDS[card].value;
            console.log('A *' + CARDS[card].symbol + ' lapot húzta a bank');
        }
        else if (card >= 10) {
            this.sum += 10;
            this.cards.push(CARDS[card].symbol);
            console.log('A *' + CARDS[card].symbol + ' lapot húzta a bank');

        }
        else
            this.sum += 11;

        return card;
    }
    check_new_card(ertek) {
        /**
         * Látom, hogy ezt arra használod, hogy megállapítsd valaki túllépte -e a 21 pontot
         * 
         * Az ötlet jó, de sokkal jobb lenne, ha a függvény neve pl 'isPointsOver' lenne
         * és true vagy false értéket ad vissza
         */
        //console.log('SUM2', this.sum);
        if (ertek + this.sum > 21)
            return -1;
        if (ertek + this.sum == 21)
            return 0;
        if (ertek < 21)
            return 1;
    }
    start() {
        //console.log('SUM3', this.sum);
        //this.sum = 0;
        this.new_card(true);
        this.new_card(true);
        if (this.sum === 21) return false;
        return true;
    }
    write_cards() {
        /**
         * UHHHH
         * 
         * Végmész egyesével a kártyákon és minden iterációban stringet csinálsz a tömbből
         * Miért???
         * 
         * Ha pl két lapod van, akkor ez a függvény duplán csinálja meg a stringet, ha 5, akkor ötszöt
         * pl.:
         * this.cars = [2, 6, 7];
         * cards_str = '2, 6, 7, 2, 6, 7, 2, 6, 7'
         * 
         * Illetve nem tetszik a függvény neve. Az van benne, hogy 'write', de ez a fgv nem ír ki semmi sehova, csak visszaad egy stringet
         * Jobb név lehetne: getCardsAsString()
         */
        let cards_str = '';
        for (let i in this.cards) {
            cards_str = this.cards.join(', ');
        }
        return cards_str;
    }
    findcard(asd) {
        /**
         * ASD FOR PRESIDENT
         */
        return CARDS[asd].value;
    }
    sum_asd() {
        /**
         * ASD FOR PRESIDENT
         * Erre így nincs szükség (tudom mondtad közben, hogy egy bug miatt próbáltad így kiíratni, de ha már nem kell akkor töröljük)
         */
        return this.sum;
    }
    card_pieces() {
        /**
         * Szintén felesleges
         * 
         * player.cards.length -vel elérhető
         */
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
let player1 = new player();
let bank = new player();
player1.start();
bank.new_card(false);
bank.new_card_kirr_nelkul();
console.log('A bank kezdő lapja: ' + bank.cards[0]);
console.log(player1.write_cards());
console.log('A lapjaid értéke: ' + player1.sum);
let bank_ker_e = true;
let te_kersz_e = true;
let valaki_tullepte = false;
while (true) {
    if (te_kersz_e) {
        const answer = readline.question('Kérsz egy lapot(Y or N):');
        if (answer == 'Y') {
            /**
             * Itt is sokkal jobban nézne, hogy:
             * 
             * if (!player1.isPointsOver()) {
             *   ...
             * } else {
             *   console.log('túllépted);
             * }
             */
            if (player1.check_new_card(player1.new_card(true)) > -1) {
                console.log(player1.write_cards());
                console.log();
                console.log('A lapjaid értéke: ' + player1.sum);
                if (player1.sum_asd() === 21) {
                    console.log('Nyertél GRATULAAAA!!!!!')
                    break;
                }
            }
            else {
                valaki_tullepte = true;
                console.log('túl lépted');
                break;
            }

        }
        if (answer == 'N') te_kersz_e = false;
        else
            console.log('Hibás utasitás!')
    }
    
    /**
     * Ez a logika legalább egy függvénybe kerülhetett volna
     * Végülis itt van a bank döntése
     */
    if (bank_ker_e) {
        if (bank.sum_asd() < 16) {
            if (bank.check_new_card(bank.new_card(false)));
            else {
                valaki_tullepte = true;
                console.log('A bank túllépte!');
                break;
            }
        }
        else
            bank_ker_e = false;
    }
    if (!te_kersz_e && !bank_ker_e)
        break;
}

/**
 * Ezt nem próbáltam meg értelmezni :)
 * Lejjebb mutatom, hogy lehetne kicsit szebben
 */

if (valaki_tullepte) {
    if (!te_kersz_e && !bank_ker_e) {
        if (bank.sum_asd() < 21 && player1.sum_asd < 21) {
            if (player1.sum_asd() > bank.sum_asd()) {
                console.log('Nyertél!');
                console.log('A te lapjaid: ' + player1.write_cards());
            }
            else {
                console.log('Vesztettél!');
                console.log('A bank lapjai: ' + bank.write_cards());
            }
        }
    }
}


/**
 * A sok if -et simán össze lehet vonni egybe:
 * 
 * if (valaki_tullepte && !te_kersz_e && !bank_ker_e && bank.sum_asd() < 21 && player1.sum_asd < 21) {
 *     if () {
 *      ...
 *     }
 *     else {
 *      ...
 *     } 
 * }
 * 
 * Ezzel annyit nyers, hogy egy szinten tartod a logikát. Viszont lesz egy bazi nagy feltételed, ami még ugyanúgy átláthatatlan
 * Következő lépésben ezeket ki lehet emelni függvényekbe, amiknek lehet NEVET adni.
 * 
 * function hasCardRequest() {
 *   return te_kersz_e || bank_ker_e;
 * }
 * 
 * function arePlayersUnderLimit() {
 *   return bank.sum_asd() < 21 && player.sum_asd() < 21;
 * }
 * 
 * És akkor az if:
 * if (valaki_tullepte && !hasCardRequest() && arePlayersUnderLimit()) {
 *  ...
 * }
 * 
 * Olvasd vég az ifet:
 * 'HA valaki túllépte ÉS nem kérnek több lapot ÉS mindenkinek a pontja limit alatt van'
 * 
 * És ezt most hasonlítsd össze az eredetivel.
 * 
 * Mennyivel egyszerűbb, érthetőbb, átláthatóbb
 * 
 * Egyébként az eredeti logikában van egy logikai bukfenc:
 * Az első if() -ben azt vizsgálod, hogy 'valaki_tullepte'
 * Két iffel később pedig azt, hogy a játékos és a bank össz pontja is 21 alatt van.
 * Ez így nem logikus.
 */