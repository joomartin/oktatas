function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hi I am ${this.name} and I am ${this.age} years old`;
}

function Student(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Student.prototype.greet = function () {
    return Person.prototype.greet.call(this) + ' student. I am studying ' + this.subject;
}

const p = new Person('Gary', 19);
const pg = p.greet();
console.log(pg);

const s = new Student('Martin', 20, 'IT');
const sg = s.greet();
console.log(sg);