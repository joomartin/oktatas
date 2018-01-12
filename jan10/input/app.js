const readline = require('readline-sync');
const lodash = require('lodash');

// const numbersStr = readline.question('Számok: ');
// // '1,2,3' -> [1, 2, 3]

// const numbers = numbersStr
//         .split(',')
//         .filter(x => x !== '')
//         .map(x => parseInt(x));

// console.log(lodash.sum(numbers));

const arr = [
    [1,2,3],
    [2,4,2],
    [3,5]
];

const arr1 = lodash.flatten(arr);
console.log(arr1);

const diff = lodash.difference([1,2,3], [2,3,4]);
console.log(diff);