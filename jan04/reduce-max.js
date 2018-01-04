const arr = [5,3,45,75,2];

let max = arr[0];
for (const x of arr) {
    if (x > max) {
        max = x;
    }
}

console.log(max);

const max1 = arr.reduce((max, x) => Math.max(max, x), 0);
console.log(max1);