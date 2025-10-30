const fs = require('fs');

// Find the sum of all the numbers
function add(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const numbers = text.trim().split(/\s+/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Find the highest number
function highest(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const numbers = text.trim().split(/\s+/).map(Number);
    return Math.max(...numbers);
}

// Find the lowest number
function lowest(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const numbers = text.trim().split(/\s+/).map(Number);
    return Math.min(...numbers);
}

// Find the average
function average(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');
    const numbers = text.trim().split(/\s+/).map(Number);
    if (numbers.length === 0) return 0;
    return add(sampleNumPath) / numbers.length;
}

const sampleNumPath = './data/sample-numbers.txt';

console.log('Numbers:', sampleNumPath);
console.log('Sum:', add(sampleNumPath));
console.log('Highest:', highest(sampleNumPath));
console.log('Lowest:', lowest(sampleNumPath));
console.log('Average:', average(sampleNumPath));

// ---- Export functions for testing ---- //
module.exports = {
  add,
  highest,
  lowest,
  average
};
