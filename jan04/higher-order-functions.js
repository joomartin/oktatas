// let x = function bar(t) {
//     return 1;
// }

// let x = (t) => {
//     return 1;
// }

// function foo(x, fn) {
//     console.log(x);
//     fn('john');
// }

// foo(10, function (name) {
//     console.log(`hello ${name}`);
// });

const prices = [1990, 990, 1490];
const tax = 1.27;
const discountRate = 0.10;

// function grossPrices(netPrices, tax) {
//     let gross = [];
//     for (const price of netPrices) {
//         gross.push(price * tax);
//     }

//     return gross;
// }

// function discount(grossPrices, discountRate) {
//     let prices = [];
//     for (const price of grossPrices) {
//         if (price > 1500) {
//             prices.push(price);
//         }
//     }

//     return prices;
// }

function grossPrices(netPrices, tax) {
    return netPrices.map(price => price * tax);
}

function discount(grossPrices, discountRate) {
    return grossPrices.filter(price => price > 1500);
}

const gross = grossPrices(prices, tax);
const discountedPrices = discount(gross, discountRate);
console.log(discountedPrices);