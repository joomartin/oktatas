const arr = [1,1,1];
const strs = ['he', 'll', 'o', ' ', 'wor', 'ld'];

let word = '';
for (const s of strs) {
    word += s;
}

const word1 = strs.reduce((word, s) => word += s, '');

console.log(word);
console.log(word1);

// let sum = 0;
// for (const x of arr) {
//     sum += x;
// }

// console.log(sum);

// reduce -> egy arrayből egyetlen értéket szeretnél csinálni

const sum1 = arr.reduce((sum, x) => {
    return sum + x;
}, 0);

console.log(sum1);

