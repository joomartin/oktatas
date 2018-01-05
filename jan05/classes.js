class Person {
    constructor(name, age) {
        // publikus propertyk
        this.name = name;
        this.age = age;
    }

    greet() {
        // console.log('I am ' + this.name);
        return 'I am ' + this.name;
    }

    static foo() {
        console.log('foo');
        // NEM HASZNÁLOK THIS -T
    }
}

class Student extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    greet() {
        return super.greet() + ' I am studying ' + this.subject;
    }
}

const p = new Person('John', 30);
const s = new Student('Béla', 22, 'IT');

console.log(p.greet());
console.log(s.greet());
