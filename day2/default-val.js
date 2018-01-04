function grossPrice(price, tax = 0.27) {
    // const realTax = tax || 0.27;
    return price * (1 + tax);
}

const x = grossPrice(1000);
const y = grossPrice(1000, 0.33);
console.log(x, y);