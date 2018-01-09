function findProduct(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id === 2) {
                rej('no product with id ' + id);
            }
    
            res({
                id: 1,
                groupId: 10,
                name: 'Rántott hús'
            });
        }, 500);
    });
}

function findProductGroup(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id === 2) {
                rej('no product group with id ' + id);
            }
    
            res({
                id: 10,
                categoryId: 100,
                name: 'Főételek'
            });
        }, 500);
    });    
}

function findCategory(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id === 2) {
                rej('no category with id ' + id);
            }
    
            res({
                id: 100,
                name: 'Ételek'
            });
        }, 500);
    });   
}

findProduct(1)
    .then(product => findProductGroup(product.groupId))
    .then(productGroup => findCategory(productGroup.categoryId))
    .then(category => console.log('CATEGORY: ', category))
    .catch(err => console.log(err));

// findProduct(1, (err, product) => {
//     if (err) {
//         throw new Error(err);
//     }

//     findProductGroup(product.groupId, (err, productGroup) => {
//         if (err) {
//             throw new Error(err);
//         }

//         findCategory(productGroup.categoryId, (err, category) => {
//             if (err) {
//                 throw new Error(err);
//             }

//             console.log('CATEGORY', category);
//         });
//     });
// });