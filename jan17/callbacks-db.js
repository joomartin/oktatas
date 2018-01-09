function findProduct(id, cb) {
    setTimeout(() => {
        if (id === 2) {
            cb('no product with id ' + id);
        }

        cb(null, {
            id: 1,
            groupId: 10,
            name: 'Rántott hús'
        });
    }, 500);
}

function findProductGroup(id, cb) {
    setTimeout(() => {
        if (id === 2) {
            cb('no product group with id ' + id);
        }

        cb(null, {
            id: 10,
            categoryId: 100,
            name: 'Főételek'
        });
    }, 500);
}

function findCategory(id, cb) {
    setTimeout(() => {
        if (id === 2) {
            cb('no category with id ' + id);
        }

        cb(null, {
            id: 100,
            name: 'Ételek'
        });
    }, 500);
}

findProduct(1, (err, product) => {
    if (err) {
        throw new Error(err);
    }

    findProductGroup(product.groupId, (err, productGroup) => {
        if (err) {
            throw new Error(err);
        }

        findCategory(productGroup.categoryId, (err, category) => {
            if (err) {
                throw new Error(err);
            }

            console.log('CATEGORY', category);
        });
    });
});