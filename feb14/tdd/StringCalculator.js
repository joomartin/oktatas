/**
 * '1,2,3' => 6
 * '' => 0
 * '1,2,1000,1001' => 3
 * '1,2,3,-4' => Error
 */

const MAX_NUMBER_ALLOWED = 1000;

class StringCalculator {
    base(numbersStr) {
        return numbersStr
            .split(',')
            .map(s => parseInt(s))
            .map(n => this.guardAgainstNegativeNumber(n))
            .filter(n => n < MAX_NUMBER_ALLOWED);
    }
    add(numbersStr) {
        return this.base(numbersStr)
            .reduce((sum, n) => sum + n, 0);
    }

    multiply(numbersStr) {
        return this.base(numbersStr)
            .reduce((product, n) => product * n, 1);
    }

    guardAgainstNegativeNumber(n) {
        if (n < 0) throw new Error('Negative numbers not allowed');
        return n;
    }
}

module.exports = StringCalculator;