function evaluateAnswer(answer) {
    if (answer === 'A') {
        console.log('szipi szupi');
    } else {
        console.log('nem jo');
    }
}

const answer = createAnswer('A');
answer.evaluate();


function createAnswer(letter) {
    if (letter === 'A') {
        return new CorrectAnswer;
    }

    return new IncorrectAnswer;
}

class Answer {
    evaluate() {

    }
}

class CorrectAnswer extends Answer {
    evaluate() {
        console.log('szipi szupi');
        foo();
    }

    foo() {

    }
}

class IncorrectAnswer extends Answer {
    evaluate() {
        console.log('nem jo');
    }
}