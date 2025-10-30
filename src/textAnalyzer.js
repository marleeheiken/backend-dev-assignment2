const fs = require('fs');

// count how many words the file has
function countWords(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const words = text.trim().split(/\s+/); // split on spaces, tabs, newlines
    return words.filter(word => word.length > 0).length;
}

// Find the longest word in a file
function findLongestWord(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const cleanText = text.replace(/[,.]/g, '');

    const words = cleanText.trim().split(/\s+/);
    let longest = '';
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
// count how many lines the file has
function countLines(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const lines = text.split(/\r?\n/);
    return lines.length;
}
  
const quotesPath = './data/quotes.txt';
const samplePath = './data/sample-text.txt';

console.log('Word Count:', countWords(quotesPath));
console.log('Longest Word:', findLongestWord(quotesPath));
console.log('Line Count:', countLines(quotesPath));

console.log('Word Count:', countWords(samplePath));
console.log('Longest Word:', findLongestWord(samplePath));
console.log('Line Count:', countLines(samplePath));

// export functions
module.exports = {
  countWords,
  findLongestWord,
  countLines
};
