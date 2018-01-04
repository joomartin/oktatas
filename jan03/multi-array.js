const arr = [
    [1,2,3],    // 0
    [4,5,6],    // 1
    [7,8,9]     // 2
];

// új array -t, aminek minden indexében
// az 'arr' legnagyobb eleme szerepel

/**
 * [3, 6, 9]
 */
let result = [];
// for (const numbers of arr) {
//     const max = Math.max(...numbers);
//     result.push(max);
// }

for (const numbers of arr) {
    let max = numbers[0];

    for (const n of numbers) {
        if (n > max) {
            max = n;
        }
    }

    result.push(max);   
}

// for (let i = 0; i < arr.length; i++) {
//     let max = arr[i][0];

//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > max) {
//             max = arr[i][j];
//         }
//     }

//     result.push(max);   
// }

console.log(result);