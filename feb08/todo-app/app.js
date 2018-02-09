$(document).ready(async function () {
    const main = $('#main');

    initDueDate();

    const response = await axios.get('http://127.0.0.1:8000/todos?isCompleted=0');
    const todos = response.data;

    renderTodos(todos);

    function createCard(todo) {
        const source = $('#card-template').html();
        const template = Handlebars.compile(source);

        todo.isFuture = isFuture(todo);
        todo.fromNow = moment(todo.dueDate).fromNow();

        todo.body = todo.body.length > 30 
            ? todo.body.slice(0, 30) + '...'
            : todo.body;

        return template(todo);
    }

    function isFuture(todo) {
        // Ha a today nagyobb, akkor pozitív számot ad vissza
        const today = moment();

        if (today.diff(moment(todo.dueDate), 'minutes') > 0) {
            return false;
        }

        return true;
    }

    $('body').on('click', '.remove', async function (event) {
        const id = $(this).data('id');
        await axios.delete('http://127.0.0.1:8000/todos/' + id);

        removeTodo(this);

        event.stopPropagation();
        return false;
    });

    $('body').on('click', '.complete', async function (event) {
        const id = $(this).data('id');
        const todo = todos.find(t => t.id == id);

        await axios.put('http://127.0.0.1:8000/todos/' + id, {
            title: todo.title,
            body: todo.body,
            isCompleted: 1
        });

        removeTodo(this);

        event.stopPropagation();
    });

    $('#create-todo').click(function () {
        $('#create-form').removeClass('d-none');

        $('#title').focus();
    });

    $('#cancel').click(function () {
        hideForm();
    });

    $('#submit').click(async function () {
        submit();
        resetForm();
        hideForm();
    });

    $('#submit-and-new').click(async function () {
        submit();
        resetForm();
    });

    function hideForm() {
        $('#create-form').addClass('d-none');
    }

    async function submit() {
        const data = {
            title: $('#title').val(),
            body: $('#body').val(),
            dueDate: $('#dueDate').val()
        };

        if (!data.title) {
            alert('Title is required');
            return false;
        }

        const response = await axios.post('http://127.0.0.1:8000/todos', data);

        const card = createCard(response.data);
        main.append(card);
    }

    function resetForm() {
        $('#title').val('');
        $('#body').val('');
        initDueDate();

        $('#title').focus();
    }

    function removeTodo(elem) {
        $(elem).parents('.card').fadeOut(500, function () {
            $(this).remove();
        });
    }

    async function navClick(queryParamStr, element) {
        setActive(element);

        const response = await axios.get('http://127.0.0.1:8000/todos?' + queryParamStr);
        const todos = response.data;

        renderTodos(todos);
    }

    $('#all').click(async function () {
        await navClick('isCompleted=0', this);
    });

    $('#today').click(async function () {
        await navClick('isCompleted=0&dueDate=day', this)
    });

    $('#this-week').click(async function () {
        await navClick('isCompleted=0&dueDate=week', this)
    });

    $('#completed').click(async function () {
        await navClick('isCompleted=1', this)
    });

    function renderTodos(todos) {
        main.html('');
        for (const todo of todos) {
            const card = createCard(todo);
            main.append(card);
        }
    }

    function setActive(element) {
        $('ul.nav a').removeClass('active');
        $(element).addClass('active');
    }

    function initDueDate() {
        $('#dueDate').val(moment().format('YYYY-MM-DD HH:MM'));
    }
});