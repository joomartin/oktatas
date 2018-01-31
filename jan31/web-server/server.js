const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send('Hello world');
});

app.post('/post', (request, response) => {
    console.log(request.body);
    response.send('OK');
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});