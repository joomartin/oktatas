const fs = require('fs')
const readline = require('readline-sync')
const path2 = require('path')

const path = readline.question('Add meg az utvonalat:')
let result = [];
let extarr = [];

let obj = {
    name: '',
    pieces: 0
}
fs.readdir(path, (err, files) => {
    for (let i = 0; i < files.length; i++) {
        fs.stat(path + '\\' + files[i], (err, stats) => {
            if (err) {
                throw err;
            }
            result.push({
                path: path + '\\' + files[i],
                type: stats.isFile() ? 'file' : 'folder'
            });
            if (i == files.length - 1) {
                for (var j = 0; j < result.length; j++) {
                    let e = path2.extname(result[j].path);

                    if (path2.extname(result[j].path) === '' && result[j].type == 'folder') e = 'Folder'
                    if (path2.extname(result[j].path) === '' && result[j].type == 'file') e = 'No extension'

                    let index = extarr.findIndex(o => o.extension == e)

                    if (index != -1) {
                        extarr[index].qty++
                    } else {
                        extarr.push({
                            extension: e,
                            qty: 1
                        })
                    }
                }
                let str = '';
                extarr = extarr.sort((b, a) => a.qty - b.qty)
                for (var k = 0; k < extarr.length; k++) {

                    str += extarr[k].extension + ": " + extarr[k].qty + "\r\n"
                }
                fs.writeFile(path + "\\output.txt", str, 'utf8', (err) => {
                    if (err) {
                        throw err
                    }
                })
                console.log(extarr.sort((b, a) => a.qty - b.qty))
            }
        });
    }

});
