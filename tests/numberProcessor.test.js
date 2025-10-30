const {add, highest, lowest, average} = require("../src/numberProcessor");

describe("tests for sample numbers file", () => {
    test('sum tests', () => {
        const numbers = add('./data/sample-numbers.txt');
        expect(numbers).toBe(2597);
    });

    test('highest number test', () => {
        const numbers = highest('./data/sample-numbers.txt');
        expect(numbers).toBe(96);
    });

    test('lowest number test', () => {
        const numbers = lowest('./data/sample-numbers.txt');
        expect(numbers).toBe(73);
    });

    test('calculate average test', () => {
        const numbers = average('./data/sample-numbers.txt');
        expect(numbers).toBe(86.56666666666666);
    });
});
