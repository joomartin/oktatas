const fs = require('mz/fs');
const readline = require('readline-sync');

function getIds() {
    const ids = readline.question('azonositok: ');
    return ids.split(',');
}

function getProduct(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const product = PRODUCTS.find(p => p.id == id);

            if (!product) {
                rej('Nincs ilyen termek' + id);
            }

            res(product);
        }, 1000);
    });
}

const PRODUCTS = [
    { id: 1, name: 'termék 1' },
    { id: 2, name: 'termék 2' },
    { id: 3, name: 'termék 3' },
    { id: 4, name: 'termék 4' }
];

async function main() {
    // Bekérsz bármennyi ID -t vesszővel elválasztva
    // Utána lekérdezed ezeket az elemeket ASZINKRON módon
    // Utána ezeknek a neveit írjuk ki fileba
    // async, await használatával

    // 1,2,3 -> [1,2,3]

    try {
        const ids = getIds();
        // let str = '';
        // for (const id of ids) {
        //     const product = await getProduct(id);
        //     str += product.name;
        // }

        const promises = ids.map(id => getProduct(id));
        const str = (await Promise.all(promises))
            .map(p => p.name)
            .join('\r\n');

        await fs.writeFile('./output.txt', str);
    } catch (err) {
        console.log(err);
    }
}

main();