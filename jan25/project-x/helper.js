function filterEntities(entities, userId) {
    return entities.filter(e => e.userId === userId);
}

function entitiesToString(type, entities) {
    return (type === 'todo')
        ? todosToString(entities)
        : postsToString(entities);
}

function todosToString(todos) {
    const stat = getTodoStat(todos);

    let str = `Completed: ${stat.completed}\r\nUncompleted: ${stat.uncompleted}\r\n\r\n`;

    str += todos
        .map(t => `Title: ${t.title}\r\n`)
        .join('\r\n');

    return str;
}

function postsToString(posts) {
    return posts
        .map(p => `Title: ${p.title}\r\nBody: ${p.body}`)
        .join('\r\n\r\n');
}

function getTodoStat(todos) {
    return todos.reduce((acc, todo) => {
        if (todo.completed) acc.completed++;
        else acc.uncompleted++;

        return acc;
    }, { completed: 0, uncompleted: 0 });
}

module.exports = {
    filterEntities,
    entitiesToString
};