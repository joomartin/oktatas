class Foo {
    constructor(name, logger) {
        this.name = name;
        this.logger = logger;
    }

    operation() {
        console.log('some stuff');
        this.logger.log('some stuff');
    }
}

class Logger {
    log(text) {
        throw new Error('log Not implemented');
    }
}

class FileLogger extends Logger {
    log(text) {
        console.log('write to file ' + text);
    } 
}

class DatabaseLogger extends Logger {
    log(text) {
        console.log('insert to db' + text);
    }
}

class EmailLogger extends Logger {
    log(text) {
        console.log('send email ' + text);
    }
}

class SomeLogger extends Logger {
    log() {
        console.log('aesfdasdf');
    }
}

const logger = new SomeLogger();
const foo = new Foo('asdf', logger);

foo.operation();