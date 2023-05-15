var readLineSync = require("readline-sync");
var userName = readLineSync.question("what is your Name? ");
console.log("hello " + userName + " do you Know Abhishek? ");
var points = 0;
var questions = [
  {
    question: "Where did Abhishek Live ? ",
    answer: "Maihar",
  },
  {
    question: "Who is preetike ? ",
    answer: "Sister of Abhishek",
  },
  {
    question: "which is my favorite superhero ? ",
    answer: "Batman",
  },
  {
    question: "Which is my favorire cartoon character? ",
    answer: "oggy",
  },
  {
    question: "What is my favorite season? ",
    answer: "Winter",
  },
  {
    question: "what is my favorite drink? ",
    answer: "tea",
  },
];
var highScores = [
  {
    name: "Abhishek's Mom",
    score: 6,
  },
  {
    name: "preetika",
    score: 6,
  },
  {
    name: "myself",
    score: 10000000,
  },
];
function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("good this is right answer 😊 ");
    points++;
  } else {
    console.log("bruh... your answer is wrong 😡");
    points--;
  }
  console.log("your current points are " + points);
  console.log("-------------");
}
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
if (points < 3) {
  console.log(points + "is bad score you dont know me ");
} else {
  console.log(points + " points , thankgod you know me ");
}
console.log("Check out the highscore");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + highScores[i].score);
}
