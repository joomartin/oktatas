function foo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('result');            
            } else {
                reject('NoSmokeException');    
            }
        }, 2000);
    });
}

foo()
    .then(r => console.log(r))
    .catch(err => console.log(err));

// function findProduct(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === 2) {
//                 reject('invalid P id');   // -> catch
//             } else {
//                 resolve({
//                     id: 1,
//                     name: 'Rántott hús',
//                     productGroupId: 10
//                 });     // -> then
//             }
//         }, 1000);        
//     });
// }

// function findProductGroup(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === 20) {
//                 reject('invalid PG id');   // -> catch
//             } else {
//                 resolve({
//                     id: 10,
//                     name: 'Sertéshús',
//                     categoryId: 100
//                 });     // -> then
//             }
//         }, 1000);        
//     });
// }

// function findCategory(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === 200) {
//                 reject('invalid C id');   // -> catch
//             } else {
//                 resolve({
//                     id: 100,
//                     name: 'Ételek'
//                 });     // -> then
//             }
//         }, 1000);        
//     });
// }

// function f() {
//     console.log('f');
// }

// function g() {
//     console.log('g');
// }

// f();

// findProduct(1)
//     .then(product => findProductGroup(product.productGroupId))
//     .then(pg => findCategory(pg.categoryId))
//     .then(c => console.log(c))
//     .catch(err => console.log(err));


// g();