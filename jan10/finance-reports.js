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

const CategoryQuery = {
    findById(id) {
        return CATEGORIES.find(c => c.id == id);
    }
}

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

const ProductQuery = {
    findById(id) {
        return PRODUCTS.find(p => p.id == id);
    },
    findByName(name) {
        return PRODUCTS.find(p => p.name === name);
    }
}

class Order {
    constructor(id, table, discountRate = 0) {
        this.id = id;
        this.table = table;
        this.discountRate = discountRate;

        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    addProducts(products) {
        products.forEach(p => this.products.push(p));
    }

    getOriginalPrice() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }

    getPrice() {
        const sum = this.getOriginalPrice();
        const discountPrice = sum * this.discountRate / 100;

        return sum - discountPrice;

        // return this.discountRate
        //     ? sum - (sum * this.discountRate / 100)
        //     : sum;

        // if (this.discountRate) {
        //     return sum - (sum * this.discountRate / 100);
        // }

        // return sum;
    }

    getDiscount() {
        return this.getOriginalPrice() - this.getPrice();
    }
}

const order1 = new Order(100, 'a1');
order1.addProducts([ProductQuery.findById(1), ProductQuery.findById(2)]);

const order2 = new Order(101, 'a2');
order2.addProducts([ProductQuery.findById(1), ProductQuery.findById(2), ProductQuery.findById(3)]);

const order3 = new Order(102, 'a1');
order3.addProducts([ProductQuery.findByName('Rántott hús'), ProductQuery.findByName('Hasábkrumpli')]);

// console.log(order1.getOriginalPrice());
// console.log(order1.getPrice());
// console.log(order1.getDiscountPrice());
// console.log(order1.discountRate);

const ORDERS = [order1, order2, order3];

/**
 * Visszaadja az összes rendelést, ár szerint rendezve (kedvezményt figyelembe véve)
 * @param String direction asc = növekvő, desc = csökkenő
 */
function getOrdersByPrice(direction = 'desc') {
    return ORDERS.sort((a, b) => {
        return direction === 'desc'
            ? b.getPrice() - a.getPrice()
            : a.getPrice() - b.getPrice();

        // if (direction === 'desc') {
        //     return b.getPrice() - a.getPrice();            
        // }

        // return a.getPrice() - b.getPrice();
    });
}

/**
 * Visszaadja azt a rendelést, amelyiknek a legnagyobb volt az ára
 */
function getMaxOrder() {
    return getOrdersByPrice()[0];
}

/**
 * Visszaadja a legnépszerűbb terméket eladott darabszámmal együtt
 */
function getMostPopularProduct() {
    const obj = getProductsBySaleQty();
    const max = { id: null, qty: 0 };

    Object.keys(obj).forEach(id => {
        if (obj[id] > max.qty) {
            max.qty = obj[id];
            max.id = id;
        }
    });

    return Object.assign(
        {},
        ProductQuery.findById(max.id),
        { qty: max.qty }
    );
}

/**
 * Visszaadja, hogy melyik termékből mennyit adtak el
 * Olyan objektumot ad vissza, ahol az indexek a termék azonosítók, az értékek pedig az eladott mennyiségek
 */
function getProductsBySaleQty() {
    /**
     * pl.:
     * {
     *      1: 3,
     *      2: 1
     * }
     */
    return ORDERS
        .map(o => o.products)
        .reduce((acc, products) => acc.concat(products))
        .reduce((acc, product) => {
            if (!acc[product.id]) {
                acc[product.id] = 0;
            }

            acc[product.id]++;

            return acc;
        }, {});
}

/**
 * Visszaadja, hogy melyik termék mennyi bevételt hozott
 * getProductsBySale -hez hasonló objektumot ad vissza
 */
function getSumPriceByProducts() {
    const obj = getProductsBySaleQty();
    let result = {};

    Object.keys(obj).forEach(id => {
        const product = ProductQuery.findById(id);
        result[id] = obj[id] * product.price;
    });

    return result;

    /**
     * @TODO rendezd ár szerint
     */
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

    function findCategory(acc, categoryId) {
        return acc.find(o => o.category.id == categoryId);
    }
    
    return ORDERS
        .map(o => o.products)
        .reduce((acc, products) => acc.concat(products))
        .map(p => Object.assign(
            {}, 
            p, 
            { category: CategoryQuery.findById(p.categoryId) }
        ))
        .reduce((acc, product) => {
            let cat = findCategory(acc, product.categoryId);
            if (!cat) {
                cat = {
                    category: product.category,
                    sum: 0
                };

                acc.push(cat);
            }

            cat.sum += product.price;

            return acc;
        }, []);
}

// console.log(getProductsBySaleQty());
// console.log(getMostPopularProduct());
// console.log(getSumPriceByProducts());
console.log(getSumPriceByCategories());