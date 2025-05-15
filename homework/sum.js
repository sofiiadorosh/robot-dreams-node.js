const { argv, exit } = require('node:process');

function getSum() {
    const numbers = getNumbers(argv[2]);

    if (!Array.isArray(numbers)) {
        console.log("Input must be an array of numbers");
        exit(1);
    }
    const sum = calculateSum(numbers);
    console.log(`The sum of numbers: ${sum}`);
}

function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
        return Number.isNaN(numbers) ? 0 : numbers;
    }
    if (!numbers.length) return 0;
    return calculateSum(numbers[0]) + calculateSum(numbers.slice(1));
}

function getNumbers(input) {
    if (!input) {
        console.log("Please enter an array of numbers to calculate their sum");
        exit(1);
    }

    try {
        return JSON.parse(input);
    } catch {
        console.log("Invalid input. Please provide a valid array of numbers");
        exit(1);
    }
}

module.exports = getSum;
