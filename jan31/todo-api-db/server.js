const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');
const moment = require('moment');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: 'http://127.0.0.1:8000',
//     credentials: true
//   }));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(function(req, res, next) {
//     var allowedOrigins = ['http://127.0.0.1:8000', 'http://localhost:8000'];
//     var origin = req.headers.origin;
//     if(allowedOrigins.indexOf(origin) > -1){
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
//   });

/**
 * - GET /todos viszaadja az összes todot
 * - GET /todos/:id egy todot ad vissza
 * - POST /todos létrehoz egy új todot
 * - DELETE /todos/:id töröl egy meglévő todot
 * - PUT /todos/:id módosít egy meglévő todot
 * - PATCH /todos/:id készre állít egy todot
 */

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        port: '8889',   // <- EZ ALAPBÓL NEM KELL
        user: 'root',
        password: 'root',
        database: 'todo'
    });

    app.get('/todos', async (request, response) => {
        let queryStr = 'SELECT * FROM todos';
        let nextClouse = 'WHERE';

        if (request.query.isCompleted) {
            queryStr += ` WHERE isCompleted = ${request.query.isCompleted}`;
            nextClouse = 'AND';
        }

        switch (request.query.dueDate) {
            case 'week':
                const weekNumber = moment().format('W') - 1;
                queryStr += ` ${nextClouse} week(dueDate) = ${weekNumber}`;
                break;

            case 'day':
                const dayNumber = moment().format('D');
                queryStr += ` ${nextClouse} day(dueDate) = ${dayNumber}`;
                break;

            default: break;
        }

        queryStr += ' ORDER BY dueDate';
        const result = await conn.query(queryStr);
        response.json(result);
    });

    app.get('/todos/:id', async (request, response) => {
        const result = await conn.query('SELECT * FROM todos WHERE id = ' + request.params.id + ' LIMIT 1');

        if (result.length === 0) {
            response.status(404);
            response.json({
                error: 'Todo not found with id ' + request.params.id
            });
        }

        response.json(result[0]);
    });

    app.delete('/todos/:id', async (request, response) => {
        const result = await conn.query('DELETE FROM todos WHERE id = ' + request.params.id + ' LIMIT 1');

        if (result.affectedRows === 0) {
            response.status(404);
            response.json({
                error: 'Todo not found with id ' + request.params.id
            });

            return;
        }

        response.json({
            count: result.affectedRows
        });
    });

    app.post('/todos', async (request, response) => {
        const result = await conn.query(`      
            INSERT INTO todos(title, body) 
            VALUES("${request.body.title}", "${request.body.body}")
        `);     // <- BACKTICK

        const todos = await conn.query('SELECT * FROM todos WHERE id = ' + result.insertId + ' LIMIT 1');

        response.json(todos[0]);
    });

    app.put('/todos/:id', async (request, response) => {
        const result = await conn.query(`
            UPDATE todos 
            SET 
                title = "${request.body.title}",
                body = "${request.body.body}",
                isCompleted = "${request.body.isCompleted}"
            WHERE id = ${request.params.id}
            LIMIT 1
        `);

        if (result.affectedRows === 0) {
            response.status(404);
            response.json({
                error: 'Todo not found with id ' + request.params.id
            });

            return;
        }

        response.json({
            count: result.affectedRows
        });
    });

    app.options('/todos/:id', function (req, res) {
        res.json(true);
    });

    app.patch('/todos/:id', async (request, response) => {
        const result = await conn.query(`
            UPDATE todos 
            SET isCompleted = ${request.body.isCompleted}
            WHERE id = ${request.params.id}
            LIMIT 1
        `);

        if (result.affectedRows === 0) {
            response.status(404);
            response.json({
                error: 'Todo not founc with id ' + request.params.id
            });

            return;
        }

        response.json({
            count: result.affectedRows
        });
    });

    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})();