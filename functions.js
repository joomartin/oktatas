function add(x, y) {
    return x + y;
}

let x = function () {
    console.log('X');
}

let y = function () {
    console.log('Y');
}

function foo(callback) {
    console.log('foo');
    callback();
}

foo(x);
foo(y);

foo(function () {
    console.log('z');
});

// let sum = add(10, 20);
// console.log(sum);