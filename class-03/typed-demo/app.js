'use strict';

var userScore = 0;
var questions = ['Where did I grow up?', 'What was you childhood pet?', 'When is your birthday'];
var answers = ['Atlanta', 'Otto the goldfish', 'October'];
var response = '';

for (var i = 0; i < questions.length; i++) {
  response = prompt(questions[i]);
  if (response.toLowerCase() === answers[i].toLowerCase()) {
    alert('Correct!!');
    userScore++;
  } else {
    alert('Wrong!!');
  }
}

alert('You got' + userScore + ' correct, out of ' + questions.length);