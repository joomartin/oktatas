const arr = [
    [1,2,3],    // 0
    [4,5,6],    // 1
    [7,8,9]     // 2
];

// új array -t, aminek minden indexében
// az 'arr' átlaga szerepel

/**
 * [2, 5, 8]
 */

let result = [];
for (const numbers of arr) {
    let sum = 0;
    for (const n of numbers) {
        sum += n;
    }

    result.push(sum / numbers.length);
}

console.log(result);