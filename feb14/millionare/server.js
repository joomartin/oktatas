const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {

    const conn = await mysql.createConnection({
        host: 'localhost',
        port: '8889',   // <- EZ ALAPBÓL NEM KELL
        user: 'root',
        password: 'root',
        database: 'millionare'
    });

    app.get('/questions', async (request, response) => {
        const questions = await conn.query('SELECT * FROM questions');

        response.json(questions);
    });

    app.post('/questions/random', async (request, response) => {
        let query = 'SELECT * FROM questions WHERE difficulty = ' + request.query.difficulty;

        if (request.body.excludedIds 
            && request.body.excludedIds.length !== 0) {
                const idsStr = request.body.excludedIds.join(',');

                query += ' AND id NOT IN (' + idsStr + ')';
            }

        const questions = await conn.query(query);
        const result = questions.sort(() => Math.random() - 0.5);

        const question = result[0];
        const answers = await conn.query(`SELECT * FROM answers WHERE question_id = ${question.id}`);

        question.answers = answers;

        response.json(question);
    });

    app.get('/questions/isCorrect', async (request, response) => {
        const result = await conn.query(`SELECT * FROM questions WHERE id = ${request.query.questionId} LIMIT 1`);
        const question = result[0];

        if (question.correctAnswer == request.query.answer) {
            response.json({
                isCorrect: true,
                correctAnswer: question.correctAnswer
            });
        } else {
            response.json({
                isCorrect: false,
                correctAnswer: question.correctAnswer
            });
        }
    });
    
    app.listen(8000, () => {
        console.log('Server listening on port 8000');
    });
})();