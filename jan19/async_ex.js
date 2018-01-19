(async function main() {
    // Bekérsz bármennyi ID -t vesszővel elválasztva
    // Utána lekérdezed ezeket az elemeket ASZINKRON módon
    // Utána ezeknek a neveit írjuk ki fileba
    // async, await használatával

    // 1,2,3 -> [1,2,3]

    const fs = require('mz/fs');
    const readline = require('readline-sync');

    const PRODUCTS = [
        { id: 1, name: 'termék 1' },
        { id: 2, name: 'termék 2' },
        { id: 3, name: 'termék 3' },
        { id: 4, name: 'termék 4' }
    ];

    function getNumber(x) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(x);
            }, 1000);
        });
    }
})();

try {
    // minden függvény ami PROMISE -t ad vissza
    fs.writeFile();
} catch (err) {
    console.log(err);
}

// UnhandledPromiseRejection