const fs = require("fs")
const path = require('path');
const readline = require('readline-sync')

const answer = readline.question("Add meg az elérési utat!(/...)")

fs.readdir(answer, (err, files) => {
    if (err)
        throw err

    let result = []
    for (let i = 0; i < files.length; i++) {
        fs.stat(answer + "/" + files[i], (err, stats) => {
            let extension = (stats.isFile()) ? path.extname(files[i]).split(".").join("") : "folder"
            let index = result.findIndex(x => x.ext === extension)
            if (index === -1)
                result.push({
                    ext: extension,
                    quantity: 1
                })
            else
                result[index].quantity++

            if (i === files.length - 1) {
                const sorted = result.sort((a, b) => b.quantity - a.quantity)
                const resultstring = sorted.map(r => `${r.ext}: ${r.quantity}`).join("\r\n")
                
                console.log(resultstring)
                fs.writeFile("./output.txt", resultstring, "utf8", (err) => {
                    if (err)
                        throw err
                    console.log("Succes")
                })
            }
        })
    }
})