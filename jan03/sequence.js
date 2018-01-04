/**
 * Egy olyan függvény
 * ami két paramétert kap
 * Az első egy szám
 * A második pedig egy érték
 * 
 * sequence(2, 's') => ['s', 's']
 * sequence(9, 2) => [2,2,2,2,2,2,2,2]
 */

function sequence(count, value) {
    let result = [];

    for (let i = 0; i < count; i++) {
        result.push(value);
    }

    return result;
}

const xs = sequence(10, 'x');
console.log(xs);