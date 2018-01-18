fs =require('fs');
const path2 = require('path');
const readline=require('readline-sync');
let file_db=0;
let path=readline.question('Add meg az eleresi utvonalat:');
fs.readdir(path, (err, files) => {
    let result = [];
    for (let i = 0; i < files.length; i++) {
        fs.stat(path2.join(path, files[i]), (err, stats) => {
            result.push({
                path: path + files[i],
                type: stats.isFile() ? 'file' : 'folder'
            });
            if(files[i]==files[i]){
                file_db++;
                
            }
            fs.writeFile('./output.txt', 'Fájlok:'+file_db, (err) => {
                if (err) {
                    throw err;
                }
            });
            console.log(file_db)
        });
  
    }
  
});