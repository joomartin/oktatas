const arr = [2,4];

let isEven = true;
for (const x of arr) {
    if (x % 2 !== 0) {
        isEven = false;
    }
}

let isOdd = false;
for (const x of arr) {
    if (x % 2 !== 0) {
        isOdd = true;
    }
}

const isEven2 = arr.every(x => x % 2 === 0);
const isOdd2 = arr.some(x => x % 2 !== 0);

/**
 * map -> elemeket alakítasz át
 * filter -> szűrés
 * find -> első elem szűrése
 * findIndex -> első elem szűrése (INDEX)
 * every -> összes elem megfelel a feltételnek
 * some -> bármelyik (legalább egy) elem megfelel a feltételnek
 */

// console.log(isEven);
console.log(isEven2);
// console.log(isOdd);
console.log(isOdd2);