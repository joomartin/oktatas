const CATEGORIES = [
    {
        id: 10,
        name: 'Főételek'
    },
    {
        id: 11,
        name: 'Köretek'
    },
    {
        id: 12,
        name: 'Levesek'
    },
    {
        id: 13,
        name: 'Savanyúságok'
    }
];

const PRODUCTS = [
    {
        id: 1,
        name: 'Rántott hús',
        price: 990,
        categoryId: 10
    },
    {
        id: 2,
        name: 'Rizs',
        price: 490,
        categoryId: 11
    },
    {
        id: 3,
        name: 'Húsleves',
        price: 790,
        categoryId: 12
    },
    {
        id: 4,
        name: 'Hasábkrumpli',
        price: 590,
        categoryId: 11
    }
];

function findProduct(id) {
    return PRODUCTS.find(p => p.id == id);
}

class Order {
    constructor(table, discountRate = 0) {
        this.table = table;
        this.discountRate = discountRate;

        this.products = [];
    }

    get price() {
        const price = this.getOriginalPrice();

        return price - (price * (this.discountRate / 100));
    }

    getOriginalPrice() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }

    addProduct(product) {
        this.products.push(product);
    }

    addProducts(products) {
        products.forEach(p => this.addProduct(p));        
    }
}

const order1 = new Order('a1');
order1.addProducts([findProduct(1), findProduct(2)]);

const order2 = new Order('a2');
order2.addProducts([findProduct(2), findProduct(3), findProduct(1)]);

const order3 = new Order('a3');
order3.addProducts([findProduct(3), findProduct(4)]);

const orders = [order1, order2, order3];

/**
 * Visszaadja az összes rendelést, ár szerint rendezve (kedvezményt figyelembe véve)
 * @param String direction asc = növekvő, desc = csökkenő
 */
function getOrdersByPrice(direction = 'desc') {
    return orders.sort((a, b) => {
        // negatív -> első elem nagyobb
        // 0 -> két elem egyenlő
        // pozitív -> második elem nagyobb

        return (direction === 'desc')
            ? b.price - a.price
            : a.price - b.price;

        // if (direction === 'desc') {
            // return b.price - a.price;
            // if (b.price === a.price) return 0;
            // if (b.price > a.price) return 1;
            // if (b.price < a.price) return -1;
        // } else {
            // return a.price - b.price;
            // if (a.price === b.price) return 0;
            // if (a.price > b.price) return 1;
            // if (a.price < b.price) return -1;
        // }
        
    });
}

const x = getOrdersByPrice('desc');
console.log(x);

/**
 * Visszaadja azt a rendelést, amelyiknek a legnagyobb volt az ára
 */
function getMaxOrder() {
}

/**
 * Visszaadja a legnépszerűbb terméket eladott darabszámmal együtt
 */
function getMostPopularProduct() {
}

/**
 * Visszaadja, hogy melyik termékből mennyit adtak el
 * Olyan objektumot ad vissza, ahol az indexek a termék azonosítók, az értékek pedig az eladott mennyiségek
 */
function getProductsSaleQty() {
    /**
     * pl.:
     * {
     *      1: 3,
     *      2: 1
     * }
     */
}

/**
 * Visszaadja, hogy melyik termék mennyi bevételt hozott
 * getProductsBySale -hez hasonló objektumot ad vissza
 */
function getSumPriceByProducts() {
}

/**
 * Visszaadja, hogy melyik termékcsoport mennyi bevételt hozott
 * Egy array -t ad vissza amiben objektumok vannak
 */
function getSumPriceByCategories() {
    /**
     * pl.:
     * [
     *      {
     *          category: {
     *              id: 10,
     *              name: 'Köretek'
     *          },
     *          sum: 1990
     *      }
     * ]
     */
}