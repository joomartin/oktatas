(async () => {
    const fs = require("mz/fs");
    const path = require('path');
    const readline = require('readline-sync');

    try {
        const answer = readline.question("Add meg az elérési utat!(/...)")
        const files = await fs.readdir(answer);
        let result = []

        for (let i = 0; i < files.length; i++) {
            const stats = await fs.stat(path.join(answer, files[i]));

            let extension = (stats.isFile()) ? path.extname(files[i]).split(".").join("") : "folder"
            let index = result.findIndex(x => x.ext === extension)

            if (index === -1)
                result.push({
                    ext: extension,
                    quantity: 1
                })
            else
                result[index].quantity++
        }

        const sorted = result.sort((a, b) => b.quantity - a.quantity)
        const resultstring = sorted.map(r => `${r.ext}: ${r.quantity}`).join("\r\n")

        console.log(resultstring)
        await fs.writeFile('./output.txt', resultstring, 'utf8');
    } catch (err) {
        console.log('HIBA');
        console.log(err);
    }
})();