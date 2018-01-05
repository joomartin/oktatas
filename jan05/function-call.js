function Person(name) {
    this.name = name;

    this.greet = function () {
        console.log(this.name);
    }
}

// foo();
// foo.call(null);

const obj = {
    
}

const p = new Person('asdf');
p.greet();