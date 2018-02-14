const expect = require('expect');
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator;
    });

    describe('#add()', () => {
        it('returns sum of any numbers', () => {
            let sum = calculator.add('1,2,3');

            expect(sum).toBe(6);

            sum = calculator.add('0,1,2,3,4,5');

            expect(sum).toBe(15);
        });

        it('returns 0 if empty string given', () => {
            let sum = calculator.add('');

            expect(sum).toBe(0);
        });

        it('ignores numbers that greater or equals then 1000', () => {
            let sum = calculator.add('1,2,3,1000,3021');

            expect(sum).toBe(6);
        });

        it('throws an error if negative number given', () => {

            expect(() => {
                calculator.add('1,2,3,-4');
            }).toThrow(new Error('Negative numbers not allowed'));
        })
    });

    describe('#multiply()', () => {
        it('returns product of any numbers', () => {
            let product = calculator.multiply('1,2,3,4');

            expect(product).toBe(24);

            product = calculator.multiply('0,1,2,3,4,5');

            expect(product).toBe(0);
        });

        it('returns 0 if empty string given', () => {
            let sum = calculator.add('');

            expect(sum).toBe(0);
        });

        it('ignores numbers that greater or equals then 1000', () => {
            let sum = calculator.add('1,2,3,1000,3021');

            expect(sum).toBe(6);
        });

        it('throws an error if negative number given', () => {

            expect(() => {
                calculator.add('1,2,3,-4');
            }).toThrow(new Error('Negative numbers not allowed'));
        })
    });

});