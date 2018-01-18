const path = require('path')
const fs = require('fs')
const readline = require('readline-sync')
// ide raknánk a leolvasott fájlok tipusát és azok számát
var files = [];

console.log('írd a mappa elérési útvonalát')
const dir = readline.question('');

fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      files.push(getExtension(file));
    });
  })

fs.writeFile("C:\nodejs\log", files, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}