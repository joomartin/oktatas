/**
 * írj egy olyan függvényt, ami kap egy arrayt, és eldönti, 
 * hogy az elemek összege páros vagy páratlan
 */

function isSumEven(arr) {
    let sum = 0;
    for (const x of arr) {
        sum += x;
    }

    return sum % 2 === 0;
}

console.log(isSumEven([1,2]));
console.log(isSumEven([1,1]));