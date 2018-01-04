function foo(x) {
    // érték szerint van átadva, másolat készül
    x = 100;
}

let a = 10;
foo(a);

// console.log(a);

// --------

function bar(arr1) {
    // referencia szerint van átadva
    arr1[0] = 100;
}

let arr = [1,2,3];
bar(arr);

console.log(arr);