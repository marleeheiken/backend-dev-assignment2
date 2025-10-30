const {countWords, findLongestWord, countLines} = require("../src/textAnalyzer");


describe("tests for quotes txt file", () => {
    test('counts total number of words correctly', () => {
        const quotes = countWords('./data/quotes.txt');
        expect(quotes).toBe(108);
    });

    test('test should find longest word', () => {
        const quotes = findLongestWord('./data/quotes.txt');
        expect(quotes).toBe("sophistication");
    });

    test('test should count the number of lines in the file', () => {
        const quotes = countLines('./data/quotes.txt');
        expect(quotes).toBe(10);
    });
});

  
describe("tests for sample txt file", () => {
    test('counts total number of words correctly', () => {
        const sample = countWords('./data/sample-text.txt');
        expect(sample).toBe(207);
    });

    test('test should find longest word', () => {
        const sample = findLongestWord('./data/sample-text.txt');
        expect(sample).toBe("infrastructure");
    });

    test('test should count the number of lines in the file', () => {
        const sample = countLines('./data/sample-text.txt');
        expect(sample).toBe(1);
    });
});