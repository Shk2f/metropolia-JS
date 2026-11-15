console.log("I'm printing to console!");

const username = prompt("What is your name?");
const usernameOutput = document.querySelector("#username-output");
usernameOutput.textContent = username && username.trim()
    ? `Hello, ${username.trim()}!`
    : "No name was entered.";

const number1 = Number(prompt("Enter the first integer:"));
const number2 = Number(prompt("Enter the second integer:"));
const number3 = Number(prompt("Enter the third integer:"));
const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

if ([number1, number2, number3].every(Number.isInteger)) {
    document.querySelector("#sum-output").textContent = `Sum: ${sum}`;
    document.querySelector("#product-output").textContent = `Product: ${product}`;
    document.querySelector("#average-output").textContent = `Average: ${average}`;
} else {
    document.querySelector("#sum-output").textContent =
        "Please enter three valid integers.";
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const studentName = prompt("What is the student's name?");
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const house = houses[Math.floor(Math.random() * houses.length)];
document.querySelector("#house-output").textContent =
    `${studentName}, you are ${house}.`;

const year = Number(prompt("Enter a year:"));
document.querySelector("#leap-year-output").textContent =
    isLeapYear(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;

const squareRootOutput = document.querySelector("#square-root-output");
if (confirm("Should I calculate the square root?")) {
    const number = Number(prompt("Enter a number:"));
    squareRootOutput.textContent = number < 0
        ? "The square root of a negative number is not defined"
        : `The square root is ${Math.sqrt(number)}.`;
} else {
    squareRootOutput.textContent = "The square root is not calculated.";
}

const diceCount = Number(prompt("How many dice should I roll?"));
let diceSum = 0;
for (let i = 0; i < diceCount; i++) {
    diceSum += Math.floor(Math.random() * 6) + 1;
}
document.querySelector("#dice-output").textContent =
    `The sum of the dice rolls is ${diceSum}.`;

const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));
const leapYears = [];
for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
    if (isLeapYear(currentYear)) {
        leapYears.push(currentYear);
    }
}
const intervalOutput = document.querySelector("#interval-output");
intervalOutput.innerHTML = leapYears.length
    ? `<ul>${leapYears.map((leapYear) => `<li>${leapYear}</li>`).join("")}</ul>`
    : "<p>No leap years found.</p>";

const numberToCheck = Number(prompt("Enter an integer:"));
let isPrime = numberToCheck >= 2;
for (let divisor = 2; divisor * divisor <= numberToCheck; divisor++) {
    if (numberToCheck % divisor === 0) {
        isPrime = false;
        break;
    }
}
document.querySelector("#prime-output").textContent = isPrime
    ? `${numberToCheck} is a prime number.`
    : `${numberToCheck} is not a prime number.`;

const probabilityDiceCount = Number(prompt("How many dice should be rolled?"));
const targetSum = Number(prompt("What sum should be tested?"));
const repetitions = 10000;
let matchingRolls = 0;
for (let repetition = 0; repetition < repetitions; repetition++) {
    let rollSum = 0;
    for (let die = 0; die < probabilityDiceCount; die++) {
        rollSum += Math.floor(Math.random() * 6) + 1;
    }
    if (rollSum === targetSum) {
        matchingRolls++;
    }
}
const probability = matchingRolls / repetitions * 100;
document.querySelector("#probability-output").textContent =
    `Probability to get sum ${targetSum} with ${probabilityDiceCount} dice is ${probability.toFixed(2)}%`;
