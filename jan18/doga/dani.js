const readline = require('readline-sync');
const path2 = require('path');

const path = readline.question('Add meg az eleresi utvonalat: ');

var fs = require("fs");

let arr = [];

fs.readdir(path, function(error, files) {
    for(file in files) {
        let tmp = path2.extname(files[file]);
        //console.log(tmp);
        const index =  arr.findIndex(o => o.name === tmp)
        if(tmp.length == 0)
            tmp = 'folder';
        else if(index != -1){
            arr[index].pieces++;
        }else{
            let obj = { 
                name: '',
                pieces: 0
            }
            obj.name = tmp;
            obj.pieces++;
            arr.push(obj);
        }
    }
    console.log(arr);
    let str = '';
    for(asd of arr){ // ASD for president 
        str += asd.name + ': ' + asd.pieces +'\r\n';
    }
    fs.writeFile(path2.join(path, 'output.txt'),str,(err) => {
        if(err)
            throw err;
        console.log('Sikeres kiiratás');
    })
});