const person = {
    name: 'Joe',
    age: 31,
    greet() {
        // console.log('I am ' + this.name + ' I am ' + this.age);
        console.log(`I am ${this.name} I am ${this.age}`);
    }
};

const person1 = {
    name: 'Joe',
    age: 31
};

const person2 = {
    name: 'John',
    age: 25
};

// const persons = [person1, person2]

function foo(x, y) {
    return {
        x: x,
        y: y
    };
}

function createPerson(name, age, gender = 'male') {
    return {
        name, age, gender
    };
}

let p1 = createPerson('John', '20');
let p2 = createPerson('Bruce', '30');
let p3 = createPerson('Mary', '27', 'female');

const persons = [
    p1, p2, p3
];

// const f = foo(10, 20);
// console.log(f.x, f.y);

for (const p of persons) {
    console.log(p);
}

// person.greet();
// console.log(person.name);
// console.log(person.age);