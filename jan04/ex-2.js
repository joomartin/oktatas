const arr = [1,2,3];

/**
 * írj olyan függvényt, ami mindegyik számot megnöveli egyel, 
 * és csak azokat adja vissza, amik párosak
 * 
 * NEM LEHET HASZNÁLNI:
 * for ciklust
 * átmeneti változót
 * 
 * () => {}
 * map
 * filter
 */

function evenPlus(arr) {
    // const plus = arr.map(x => x + 1);
    // const even = plus.filter(x => x % 2 === 0);

    return arr
        .map(x => x + 1)
        .filter(x => x % 2 === 0);

    // return even;
}

const result = evenPlus(arr);
console.log(result);