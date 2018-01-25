const rp = require('request-promise');

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

async function getUsers() {
    return await get('users');
}

async function getPosts() {
    return await get('posts');
}

async function getTodos() {
    return await get('todos');
}

async function get(endpoint) {
    return await rp({
        uri: BASE_URL + endpoint,
        json: true
    });
}

module.exports = {
    get, getUsers, getPosts, getTodos, BASE_URL
};