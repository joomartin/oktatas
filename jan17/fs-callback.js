const fs = require('fs');

console.log('first');
fs.readFile('input.txt', 'utf8', (err, content) => {
    if (err) {
        throw err;
    }

    console.log(content);
    console.log('second');    

    fs.writeFile('output.txt', content.toUpperCase(), err => {
        if (err) {
            throw err;
        }

        console.log('output ok');
    });

    console.log('third');
});