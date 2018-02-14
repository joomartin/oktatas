const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});