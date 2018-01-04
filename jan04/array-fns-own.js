/**
 * map
 * filter
 * find
 */

/**
 * kap egy array és egy függvényt
 * végmegy az array összes elemén és meghívja a függvényt az aktuális elemmel
 * csinál egy új array és visszaadja
 */
function map(arr, fn) {
    let result = [];
    for (const value of arr) {
        result.push(fn(value));
    }

    return result;
}

/**
 * kap egy array -t és egy függvényt
 * csak azokat az elemekt adja vissza, amikre a függvény true értéket adott
 */
function filter(arr, predicateFn) {
    let result = [];
    for (const value of arr) {
        if (predicateFn(value)) {
            result.push(value);
        }
    }

    return result;
}

/**
 * kap egy array -t és egy függvényt
 * vissza adja az ELSŐ olyan elemet, amire a függvény true értéket ad
 */

// const doubled = map([1,2,3], x => x * 2);
// const xs = map([1,2,3], x => x + 2);
// console.log(doubled, xs);

const evens = filter([1,2,3,4,5], x => x % 2 === 0);
const longWords = filter(['asd', 'dsfgdsfsd', 'awe', 'sdgdsfgdsfg'], str => str.length > 5);
console.log(evens, longWords);


// firstBig === 11

function find(arr, predicateFn) {
    for (const value of arr) {
        if (predicateFn(value)) {
            return value;
        }
    }
}

const firstBig = find([1,3,11,8,15], x => x > 20);
console.log(firstBig);