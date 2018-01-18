const fs = require('mz/fs');

async function read(filename) {
    return await fs.readFile(filename, 'utf8');
}

(async () => {
    console.log('before');

    const content = await read('./input.txt');
    console.log(content);

    console.log('after');
})();