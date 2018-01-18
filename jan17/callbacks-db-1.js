function findProduct(id, cb) {
    setTimeout(() => {
        if (id === 2) {
            cb('invalid P ID');
        } else {
            cb(null, {
                id: 1,
                name: 'Rántott hús',
                productGroupId: 10
            });
        }

    }, 1000);
}

function findProductGroup(id, cb) {
    setTimeout(() => {
        if (id === 20) {
            cb('invalid PG ID');
        } else {
            cb(null, {
                id: 10,
                name: 'Sertéshús',
                categoryId: 100
            });
        }
    }, 1000);
}

function findCategory(id, cb) {
    setTimeout(() => {
        if (id === 200) {
            cb('invalid C ID');
        } else {
            cb(null, {
                id: 100,
                name: 'Ételek'
            });
        }
    }, 1000);
}

findProduct(1, (err, product) => {
    if (err) {
        throw err;
    }

    findProductGroup(product.productGroupId, (err, productGroup) => {
        if (err) {
            throw err;
        }

        findCategory(productGroup.categoryId, (err, category) => {
            if (err) {
                throw err;
            }

            console.log(category);
        });
    });
});