const fiveNumbers = [];
for (let i = 0; i < 5; i++) {
    fiveNumbers.push(Number(prompt(`Enter number ${i + 1}:`)));
}
console.log("Numbers in reverse order:");
for (let i = fiveNumbers.length - 1; i >= 0; i--) {
    console.log(fiveNumbers[i]);
}

const participantCount = Number(prompt("How many participants?"));
const participants = [];
for (let i = 0; i < participantCount; i++) {
    participants.push(prompt(`Name of participant ${i + 1}:`));
}
participants.sort((a, b) => a.localeCompare(b));
document.querySelector("#participants-output").innerHTML =
    `<ol>${participants.map((name) => `<li>${name}</li>`).join("")}</ol>`;

const dogs = [];
for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Name of dog ${i + 1}:`));
}
dogs.sort((a, b) => b.localeCompare(a));
document.querySelector("#dogs-output").innerHTML =
    `<ul>${dogs.map((name) => `<li>${name}</li>`).join("")}</ul>`;

const numbersUntilZero = [];
let number;
do {
    number = Number(prompt("Enter a number (0 stops):"));
    if (number !== 0) {
        numbersUntilZero.push(number);
    }
} while (number !== 0);
numbersUntilZero.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:", numbersUntilZero);

const enteredNumbers = [];
while (true) {
    const enteredNumber = Number(prompt("Enter a number:"));
    if (enteredNumbers.includes(enteredNumber)) {
        console.log(`${enteredNumber} has already been given.`);
        break;
    }
    enteredNumbers.push(enteredNumber);
}
enteredNumbers.sort((a, b) => a - b);
console.log("All given numbers in ascending order:", enteredNumbers);

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

const diceResults = [];
let diceResult;
do {
    diceResult = rollDie();
    diceResults.push(diceResult);
} while (diceResult !== 6);

function rollDieWithSides(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides should the die have?"));
const customDiceResults = [];
let customDiceResult;
do {
    customDiceResult = rollDieWithSides(sides);
    customDiceResults.push(customDiceResult);
} while (customDiceResult !== sides);

document.querySelector("#dice-output").innerHTML =
    `<p>Six-sided die:</p><ul>${diceResults
        .map((result) => `<li>${result}</li>`).join("")}</ul>
     <p>${sides}-sided die:</p><ul>${customDiceResults
        .map((result) => `<li>${result}</li>`).join("")}</ul>`;

function concat(strings) {
    let result = "";
    for (const string of strings) {
        result += string;
    }
    return result;
}

const bandMembers = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#concat-output").textContent = concat(bandMembers);

function even(numbers) {
    const evenNumbers = [];
    for (const value of numbers) {
        if (value % 2 === 0) {
            evenNumbers.push(value);
        }
    }
    return evenNumbers;
}

const originalNumbers = [2, 7, 4];
const evenNumbers = even(originalNumbers);
console.log("Original array:", originalNumbers);
console.log("Even numbers:", evenNumbers);

const candidateCount = Number(prompt("How many candidates?"));
const candidates = [];
for (let i = 0; i < candidateCount; i++) {
    candidates.push({
        name: prompt(`Name for candidate ${i + 1}`),
        votes: 0,
    });
}

const voterCount = Number(prompt("How many voters?"));
for (let i = 0; i < voterCount; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you vote for?`);
    const candidate = candidates.find(
        (item) => item.name.toLowerCase() === (vote || "").trim().toLowerCase()
    );
    if (candidate) {
        candidate.votes++;
    }
}

const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
const winner = sortedCandidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");
for (const candidate of sortedCandidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}

document.querySelector("#voting-output").innerHTML =
    `<p>The winner is ${winner.name} with ${winner.votes} votes.</p>
     <ul>${sortedCandidates.map((candidate) =>
        `<li>${candidate.name}: ${candidate.votes} votes</li>`).join("")}</ul>`;
