const order = {
    state: 'payed',
    price: 9990,
    name: 'Martin',
    isDiscounted: true,
    discount: 990
};

function foo(order) {
    function isDiscountable(order) {
        return order.state === 'payed' && order.price > 9000 && !order.isDiscounted;
    }

    if (isDiscountable(order)) {
        // kajsfgksjfhskadjlfh
    }
}