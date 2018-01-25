const fs = require('mz/fs');

const FILE_EXT = '.txt';

async function writeFile(username, content) {
    const filename = await getNextFilename(username);
    await fs.writeFile(`./${filename}`, content);
}

async function getNextFilename(username) {
    const files = await fs.readdir('./');
    
    const userFiles = files
        .filter(f => f.includes(FILE_EXT) && f.includes(username));

    return username + '-' + userFiles.length + FILE_EXT;
}

module.exports = {
    writeFile, getNextFilename
};