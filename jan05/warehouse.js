class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Inventory {
    constructor(userId, productId, quantity, serialNumber) {
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.serialNumber = serialNumber;
    }
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const PRODUCTS = [
    new Product(1, 'monitor'),
    new Product(2, 'pc'),
    new Product(3, 'egér')
];

const INVENTORY = [];

function scan(id, user, quantity) {
    // MySQL SELECT
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
        throw {
            message: 'Nincs ilyen termék',
            id: id
        };
    }

    // MySQL INSERT
    // INVENTORY.push({
    //     userId: user.id,
    //     productId: product.id,
    //     quantity: quantity,
    //     serialNumber: Math.random() * (100 - 1) + 1
    // });
    INVENTORY.push(
        new Inventory(
            user.id, product.id, 
            quantity, Math.random() * (100 - 1) + 1
        )
    );
}

const user = new User(1, 'john');

try {
    scan(1, user, 1);
    scan(1, user, 1);
    scan(2, user, 2);

    scan(1, user, 3);

    scan(3, user, 10);
    scan(3, user, 3);
} catch (err) {
    console.log(err);
}

console.log(INVENTORY);