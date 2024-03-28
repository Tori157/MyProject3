//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:      Name:

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
  const btnnewQuiz = document.createElement("button");
  btnnewQuiz.textContent = "NewQuiz";
  btnnewQuiz.addEventListener("click", generateQuiz);

  const btnclearQuiz = document.createElement("button");
  btnclearQuiz.textContent = "ClearQuiz";
  btnclearQuiz.addEventListener("click", clearQuiz);

  const btnmenu = document.getElementById("menu");
  btnmenu.appendChild(btnnewQuiz);
  btnmenu.appendChild(btnclearQuiz);
}

function generateQuiz() {
  clearQuiz();

  randomQuiz = getRandomQuiz();

  const tagdivQuiz = document.createElement("div");
  tagdivQuiz.setAttribute("id", "question");
  const tagp = document.createElement("p");

  //tagp.textContent = `question: ${quizQuestions.question}`;
  tagp.textContent = randomQuiz.question;
  tagp.style.margin = "5px";

  const divquestion = document.getElementById("quizContainer");
  divquestion.appendChild(tagp);

  const btnp1 = document.createElement("button");
  const btnp2 = document.createElement("button");
  const btnp3 = document.createElement("button");
  const btnp4 = document.createElement("button");

  btnp1.style.margin = "5px";
  btnp2.style.margin = "5px";
  btnp3.style.margin = "5px";
  btnp4.style.margin = "5px";

  btnp1.textContent = randomQuiz.options[0];
  btnp2.textContent = randomQuiz.options[1];
  btnp3.textContent = randomQuiz.options[2];
  btnp4.textContent = randomQuiz.options[3];

  divquestion.appendChild(btnp1);
  divquestion.appendChild(btnp2);
  divquestion.appendChild(btnp3);
  divquestion.appendChild(btnp4);

  btnp1.addEventListener("click", checkAnswer);
  btnp2.addEventListener("click", checkAnswer);
  btnp3.addEventListener("click", checkAnswer);
  btnp4.addEventListener("click", checkAnswer);

  divquestion.appendChild(btnp1);
  divquestion.appendChild(btnp2);
  divquestion.appendChild(btnp3);
  divquestion.appendChild(btnp4);
}

function clearQuiz() {
  const tagquizContainer = document.getElementById("quizContainer");
  tagquizContainer.textContent = "";

  const divanswer = document.querySelector(".answer");
  divanswer.textContent = "";
}

function checkAnswer(e) {
  const userAnswer = e.target.textContent;
  const divAnswer = document.querySelector(".answer");

  if (userAnswer === randomQuiz.answer) {
    divAnswer.textContent = "Correct";
  } else {
    divAnswer.textContent = "Incorrect";
  }
}
// querySelector # = Id  . = class

init();
