const readline = require('readline-sync');
const folder = readline.question('Give me a path! ');
const fs = require('fs')
var path = require('path')
const array = [];

  fs.readdir(folder, (err, files) => {
    let result = [];
    for (let i = 0; i < files.length;i++) {
        fs.stat(path.join(folder, files[i]), (err, stats) => {
            if(err) throw err
            result.push({
                type: stats.isFile() ? 'file' : 'folder'
            });
            array.push(path.extname(files[i]));
            if(i == files.length -1)
            {
                var newarray = compressArray(array);
                newarray = newarray.sort((a,b) => b.count - a.count);
                let something = "";
                for (var j = 0; j < newarray.length; j++) { 
                    something += newarray[j].value + " " + newarray[j].count + '\r\n'
                }
                fs.writeFile('output.txt', something, function (err) {
                    if (err) 
                    {
                        console.log('output not ok!');
                    } 
                    else 
                    {
                        console.log('output ok');
                    }
                })
            }
        });
    }
});
function compressArray(original) {
    
       var compressed = [];
       var copy = original.slice(0);
    
       for (var i = 0; i < original.length; i++) {
    
           var myCount = 0;	
           for (var w = 0; w < copy.length; w++) {
               if (original[i] == copy[w]) {
                   myCount++;
                   delete copy[w];
               }
           }
    
           if (myCount > 0) {
               var a = new Object();
               a.value = original[i] ? original[i] : "misc";
               a.count = myCount;
               compressed.push(a);
           }
       }
    
       return compressed;
   };

