TEST INT201 : Client Side Programming 1 : Module 2
Randomizer Quiz Application
Instruction:
- Create a webpage that generates a random quiz from a set of questions and options,
allows users to select options, and then displays an answer message when an option is
clicked. This project consists of three files.
Don’t edit the following files.
1. quizQuestions.js :: This file contains an array named quizQuestions, which consists
of various questions. It also includes a method named getRandomQuiz() that retrieves
a random question from the quizQuestions array.
2. index.html :: an index page
Type your codes in the quiz.js file :: This file consists of four functions.
3.1 init():: Set initial values and create operation buttons for the Randomizer Quiz.
1. Create button “New Quiz” and add an event listener to the "New Quiz" button to
call the "generateQuiz" function when clicked.
2. Create button “Clear Quiz” and add an event listener to the "Clear Quiz" button to
call the "clearQuiz" function when clicked.
3. Add both the "New Quiz" and "Clear Quiz" buttons to the <div id='menu'></div>
element.
3.2 generateQuiz() :: Generate quiz by using getRandomQuiz() show question and
options inside <div id="quizContainer"></div> with add an event listener to
options.
1. Clear all quiz content and answer messages using the clearQuiz() function.
2. Generate a quiz by using getRandomQuiz() and assign the result to a
variable named randomQuiz.
3. Create a <div id="question"> for displaying the question and options from
randomQuiz variable.
4. Create a <p> tag, set its textContent to the randomQuiz question, and add this
tag to <div id="question">.
5. Create buttons for each choice. For each button:
5.1 Set button style with "margin : 5px"
5.2 Set textContent with an option value (from options property)
5.3 Add an event listener to call the "showAnswer"
5.4 Add each button to <div id="question">.
TEST INT201 : Client Side Programming 1 : Module 2
6. Add <div id="question"> to the <div id="quizContainer"></div>
3.3 clearQuiz() :: remove all the quiz and answer inside
<div id="quizContainer"></div> and <div class="answer"></div>
3.4 checkAnswer(e) :: Display a message indicating whether the selected option is
correct or incorrect when clicking an option. If the option is correct,
add the message "Correct". If incorrect, display "Incorrect" inside the
<div class="answer"></div> element. Using the answer property from
randomQuiz variable to check the selected option.
Initial code:
index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Randomizer Quiz</title>
<style>
.answer {
color: green;
padding: 10px;
}
</style>
</head>
<body>
<h1>Randomizer Quiz</h1>
<div id="menu"></div>
<div id="quizContainer"></div>
<br />
<div class="answer"></div>
<script type="module" src="quiz.js"></script>
</body>
</html>
TEST INT201 : Client Side Programming 1 : Module 2
quiz.js:: type your codes here
//Write your student id, firstname, and lastname in a single line comment before starting
your program
//students who do not put this comment will get 50% taken off their score.
//ID: Name:
import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";
let randomQuiz;
function init() {
//insert your code here
}
function generateQuiz() {
//insert your code here
}
function clearQuiz() {
//insert your code here
}
function checkAnswer(e) {
//insert your code here
}
init();
