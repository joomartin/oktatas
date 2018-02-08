$(document).ready(async function () {
    const main = $('#main');

    const response = await axios.get('http://127.0.0.1:8000/todos');
    const todos = response.data;

    for (const todo of todos) {
        const card = createCard(todo);
        main.append(card);
    }

    function createCard(todo) {
        return `
            <div class="card mr-20" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.body}</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
        `;
    }
});