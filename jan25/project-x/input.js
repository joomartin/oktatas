const readline = require('readline-sync');

const http = require('./http');

async function getUser() {
    const username = readline.question('Add meg a felhasznalo nevet: ');
    const user = await validateUsername(username);

    if (!user) throw new Error('Invalid username');

    return user;
}

async function validateUsername(username) {
    const users = await http.getUsers();
    return users.find(u => u.username === username);
}

function getType() {
    console.log('Valassz tipust');
    console.log('1: Poszt');
    console.log('2: Teendo');

    const choose = readline.question();

    if (choose == '1') return 'posts';
    else return 'todos';
}

module.exports = {
    getUser, getType
}