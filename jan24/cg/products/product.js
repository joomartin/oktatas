function getProduct() {
    privateFn();
    console.log('product');
}

function privateFn() {
    console.log('private');
}

module.exports = {
    getProduct
};