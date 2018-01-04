// let foo = function add(x, y) {
//     return x + y;
// }

let add = (x, y) => x + y;
let add1 = (x, y) => {
    console.log('add1');
    return x + y;
}

add(1,2);
add1(2,1);