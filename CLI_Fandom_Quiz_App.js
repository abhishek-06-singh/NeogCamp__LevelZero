import readlineSync from "readline-sync";
import chalk from "chalk";

const userName = readlineSync.question("What is your name? ");
console.log("Hello " + userName + ", welcome to the Indian history quiz!");

let points = 0;
let currentLevel = 1;

const levels = [
  [
    {
      question: 'Who is considered the "Father of the Nation" in India? ',
      answer: "Mahatma Gandhi",
    },
    {
      question: "Who was the first Prime Minister of India? ",
      answer: "Jawaharlal Nehru",
    },
    {
      question:
        "Which event led to India gaining independence from British rule? ",
      answer: "Indian Independence Movement",
    },
  ],
  [
    {
      question: "Who led the Indian National Army during World War II? ",
      answer: "Subhas Chandra Bose",
    },
    {
      question: "Which Indian king is known for his patronage of Buddhism? ",
      answer: "Ashoka",
    },
    {
      question: 'Who is known as the "Iron Man of India"? ',
      answer: "Sardar Vallabhbhai Patel",
    },
  ],
];

function play(question, answer) {
  const userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Good, that is the right answer! 😊 "));
    points++;
  } else {
    console.log(chalk.red("Oops, your answer is incorrect. 😡"));
    points--;
  }
  console.log(chalk.yellow("Your current points are: " + points));
  console.log(chalk.cyan("--------------------------------------"));
}

// Play the quiz for the current level
for (let i = 0; i < levels[currentLevel - 1].length; i++) {
  play(
    levels[currentLevel - 1][i].question,
    levels[currentLevel - 1][i].answer
  );
}

// Check if the user has cleared the first level
if (points >= 2) {
  console.log(chalk.green("Congratulations! You have cleared level 1. 👏"));
  currentLevel = 2;
  points = 0;

  // Play the quiz for the second level
  for (let i = 0; i < levels[currentLevel - 1].length; i++) {
    play(
      levels[currentLevel - 1][i].question,
      levels[currentLevel - 1][i].answer
    );
  }

  // Check if the user has cleared the second level
  if (points >= 2) {
    console.log(chalk.green("Congratulations! You have cleared level 2. 👏"));
    console.log(
      chalk.yellow("You have scored " + points + " points. Great job!")
    );
  } else {
    console.log(
      chalk.red("Sorry, you did not clear level 2. Better luck next time.")
    );
  }
} else {
  console.log(
    chalk.red("Sorry, you did not clear level 1. Better luck next time.")
  );
}

console.log(
  chalk.blue("Thank you for playing the Indian history quiz, " + userName + "!")
);
