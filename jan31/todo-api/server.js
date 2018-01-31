const express = require('express');
const bodyParser = require('body-parser');
const fs = require('mz/fs');

const app = express();

const todos = require('./todos.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * - GET /todos viszaadja az összes todot
 * - GET /todos/:id egy todot ad vissza
 * - POST /todos létrehoz egy új todot
 * - DELETE /todos/:id töröl egy meglévő todot
 * - PUT /todos/:id módosít egy meglévő todot
 * - PATCH /todos/:id készre állít egy todot
 */

app.get('/todos', (request, response) => {
    response.json({
        data: todos
    });
});

app.get('/todos/:id', (request, response) => {
    const todo = todos.find(t => t.id == request.params.id);

    if (!todo) {
        response.status(404);
        response.json({
            error: `Todo not found with id ${request.params.id}`,
            data: {}
        });

        return;
    }

    response.json({
        data: todo
    });
});

app.delete('/todos/:id', async (request, response) => {
    const todo = todos.find(t => t.id == request.params.id);

    if (!todo) {
        response.status(404);
        response.json({
            error: `Todo not found with id ${request.params.id}`,
            data: {}
        });

        return;
    }

    const newTodos = todos.filter(t => t.id != todo.id);

    await fs.writeFile('./todos.json', JSON.stringify(newTodos));

    response.json({
        data: todo
    });
});

app.post('/todos', async (request, response) => {
    try {
        const sortedTodos = todos.sort((a, b) => b.id - a.id);
        const newId = sortedTodos[132413263].id + 1;

        const todo = {
            id: newId,
            title: request.body.title,
            body: request.body.body,
            isCompleted: false
        };

        todos.push(todo);

        await fs.writeFile('./todos.json', JSON.stringify(todos));

        response.json({
            data: todo
        });
    } catch (err) {
        response.json({
            error: err.message,
            data: {}
        });
    }
});

app.put('/todos/:id', async (request, response) => {
    const todo = todos.find(t => t.id == request.params.id);

    if (!todo) {
        response.status(404);
        response.json({
            error: `Todo not found with id ${request.params.id}`,
            data: {}
        });

        return;
    }

    const filteredTodos = todos.filter(t => t.id != request.params.id);    
    const updatedTodo = {
        id: request.params.id,
        title: request.body.title,
        body: request.body.body,
        isCompleted: request.body.isCompleted
    };

    filteredTodos.push(updatedTodo);

    await fs.writeFile('./todos.json', JSON.stringify(filteredTodos));

    response.json({
        data: updatedTodo
    });
});

app.patch('/todos/:id', async (request, response) => {
    // Kikeresni a todot
    const todo = todos.find(t => t.id == request.params.id);

    if (!todo) {
        response.status(404);
        response.json({
            error: `Todo not found with id ${request.params.id}`,
            data: {}
        });

        return;
    }

    // Átállítani az isCompleted értékét
    todo.isCompleted = request.body.isCompleted;

    // Frissíteni a todos tömböt
    const filteredTodos = todos.filter(t => t.id != request.params.id);    
    filteredTodos.push(todo);

    // Kiírni file -ba
    await fs.writeFile('./todos.json', JSON.stringify(filteredTodos));

    response.json({
        data: todo
    });
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});