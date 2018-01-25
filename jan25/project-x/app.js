const input = require('./input');
const http = require('./http');
const helper = require('./helper');
const file = require('./file');

(async () => {
    try {
        const user = await input.getUser();
        const type = input.getType();

        const data = await http.get(type);
        const filteredData = helper.filterEntities(data, user.id);

        const content = helper.entitiesToString(type, data);
        await file.writeFile(user.username, content);
    } catch (err) {
        console.log(err);
    }
})();