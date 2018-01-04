const numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for (const n of numbers) {
    if (n > 5) {
        sum += n;
        console.log(n);
    }
}

console.log('sum=', sum);

// const sum1 = numbers
//     .filter(x => x > 5)
//     .map(x => x * 2)
//     .reduce((acc, x) => acc + x);

// console.log('sum1=', sum1);
// console.log(xs);

// 5 -nél nagyobb számok
// dupláját kiíratni

// ezeknek a számoknak az összegét is