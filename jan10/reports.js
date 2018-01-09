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

class Order {}

/**
 * Visszaadja az összes rendelést, ár szerint rendezve (kedvezményt figyelembe véve)
 * @param String direction asc = növekvő, desc = csökkenő
 */
function getOrdersByPrice(direction = 'desc') {
}

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