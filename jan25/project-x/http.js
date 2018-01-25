const rp = require('request-promise');

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

async function get(endpoint) {
    return await rp({
        uri: BASE_URL + endpoint,
        json: true
    });
}

module.exports = {
    get, BASE_URL
};