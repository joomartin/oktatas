const fs = require('fs');

fs.readdir('./', (err, files) => {
    let result = [];
    for (const file of files) {
        fs.stat('./' + file, (err, stats) => {
            result.push({
                path: './' + file,
                type: stats.isFile() ? 'file' : 'folder'
            });

            console.log(result);
        });
    }
});