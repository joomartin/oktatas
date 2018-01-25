const input = require('./input');
const http = require('./http');
const helper = require('./helper');
const file = require('./file');

(async () => {
    try {
        const user = await input.getUser();
        const type = input.getType();

        const data = (type === 'todos')
            ? await http.getTodos()
            : await http.getPosts();

        const filteredData = helper.filterEntities(data, user.id);
        const content = (type === 'todos')
            ? helper.todosToString(filteredData)
            : helper.postsToString(filteredData);

        await file.writeFile(user.username, content);
    } catch (err) {
        console.log(err);
    }
})();