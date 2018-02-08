$(document).ready(async function () {
    const main = $('#main');

    const response = await axios.get('http://127.0.0.1:8000/todos?isCompleted=0');
    const todos = response.data;

    for (const todo of todos) {
        const card = createCard(todo);
        main.append(card);
    }

    function createCard(todo) {
        let html = `
            <div class="card mr-20" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.body}</p>`;

        if (isFuture(todo)) {
            html += `<p class="card-text">${moment(todo.dueDate).fromNow()}</p>`;
        } else {
            html += `<p class="card-text text-danger">${moment(todo.dueDate).fromNow()}</p>`;
        }

        html += `
                    <button class="btn btn-danger remove" data-id="${todo.id}">                        
                        <span class="oi oi-trash" title="Remove" aria-hidden="true"></span>
                    </button>

                    <button class="btn btn-primary complete" data-id="${todo.id}">                        
                        <span class="oi oi-check" title="Complete" aria-hidden="true"></span>
                    </button>
                </div>
            </div>`;

        return html;
    }

    function isFuture(todo) {
        // Ha a today nagyobb, akkor pozitív számot ad vissza
        const today = moment();

        if (today.diff(moment(todo.dueDate), 'minutes') > 0) {
            return false;
        }

        return true;
    }

    $('body').on('click', '.remove', async function () {
        const id = $(this).data('id');
        await axios.delete('http://127.0.0.1:8000/todos/' + id);

        removeTodo(this);
    });

    $('body').on('click', '.complete', async function () {
        const id = $(this).data('id');
        const todo = todos.find(t => t.id == id);

        await axios.put('http://127.0.0.1:8000/todos/' + id, {
            title: todo.title,
            body: todo.body,
            isCompleted: 1
        });

        removeTodo(this);
    });

    $('#create-todo').click(function () {
        $('#create-form').removeClass('d-none');

        $('#create-todo').addClass('d-none');
        $('#title').focus();
    });

    $('#cancel').click(function () {
        hideForm();
    });

    $('#submit').click(async function () {
        submit();
        hideForm();
    });

    $('#submit-and-new').click(async function () {
        submit();
        resetForm();
    });

    function hideForm() {
        $('#create-form').addClass('d-none');
        $('#create-todo').removeClass('d-none');
    }

    async function submit() {
        const data = {
            title: $('#title').val(),
            body: $('#body').val()
        };

        if (!data.title || !data.body) {
            alert('Minden mező kötelező');
            return false;
        }

        const response = await axios.post('http://127.0.0.1:8000/todos', data);

        const card = createCard(response.data);
        main.append(card);
    }

    function resetForm() {
        $('#title').val('');
        $('#body').val('');

        $('#title').focus();
    }

    function removeTodo(elem) {
        $(elem).parents('.card').fadeOut(500, function () {
            $(this).remove();
        });
    }
});