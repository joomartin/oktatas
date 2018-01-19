const fileWriter = require('./file/writer');
const fileReader = require('./file/reader');
const models = require('./models');

fileReader.readTxt();
fileWriter.writeFiles();

models.course.createCourse();
models.user.findUser();