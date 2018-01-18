const fs = require('fs');

fs.stat('./input5.txt', (err, stats) => {
    if (err) {
        throw err;
    }
    
    console.log(stats);
});