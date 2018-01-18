const fs = require('fs');

console.log('first');
fs.readFile('./input.txt', 'utf8', (err, result) => {
    if (err) {
        throw err;
    }

    const linesTransformed = result.split('\n').map((line, i) => 
        i % 2 === 0 ? line.toUpperCase() : line.toLowerCase());

    // fs.appendFile('./output.txt', linesTransformed.join('\n'), (err) => {
    //     if (err) {
    //         throw err;
    //     }

    //     console.log('file appended successfully');
    // });
    
    fs.writeFile('./output.txt', linesTransformed.join('\n'), 'utf8', (err) => {
        if (err) {
            throw err;
        }

        console.log('file written successfully');
    });
});

console.log('second');
