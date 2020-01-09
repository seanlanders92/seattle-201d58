'use strict'

//Introduction 
var name = prompt('Hi, thanks for visiting my site! \n What is your name?');
//console.log (name);
alert('Nice to meet you! \n' + name + ', Is it ok if I ask you some questions?');

//Question #1

var fun = prompt('Are you having fun at codeFellows?');
//console.log(fun);

// Jacob - Logical operations are happening
// && - inclusion of a condition
// || - the presence of a condition
// !  - THe negation of a condition
if (fun.toLowerCase() === 'yes' || fun.toLowerCase() === 'y') {
  alert('Thats awesome, so am I!');
}
else {
  alert('Well lets work together to make it fun!');
}

//Question #2

var videogames = prompt('Do you like video games?');
console.log(videogames);

var correctAnswers = ['yes', 'y']

switch (videogames.toLowerCase()) {
  case 'yes':
    alert('Hey me too!');
    break;
  case 'y':
    alert('Hey me too!');
    break;
  case 'no':
    alert('I used to, but dont have much time anymore.');
    break;
  case 'n':
    alert('I used to, but dont have much time anymore.');
    break;
}

//Question #3

var drink = prompt('Can I get you something to drink? \n I have:  Beer, Wine, Liquor, Water or Soda?');
//console.log(drink);

switch (drink.toLowerCase()) {
  case 'beer':
    alert('Sure let me grab one for you!');
    break;
  case 'wine':
    alert('You got it, I only have a white zinfandel.');
    break;
  case 'liquor':
    alert('Lets do it! \n It\'s 5 o\'clock somewhere');
    break;
  case 'water':
    alert('Yeah better take it easy for now. \n Still got some homework to finish up.');
    break;
  case 'soda':
    alert('Cool, I\'ve got Coke or Diet Coke!');
    break;
  default:
    alert('No condition was met')
}

//Question #4

var bother = prompt('Am I bothering you with all my questions?');
//console.log(bother);

if (bother.toLowerCase() === 'yes' || bother.toLowerCase() === 'y') {
  alert('Ok, I\'m sorry just trying learn more about you.');
}
else if (bother.toLowerCase() === 'no' || bother.toLowerCase() === 'n') {
  alert('Great, I\'m just trying to learn more about you.');
}
else {
  alert('Sorry I didn\'t understand that, I only have 1 more question');
}

//Question #5

var learn = prompt('So far, what are you having the most fun with? \n HTML, CSS, or JavaScript?')
//console.log(learn);

switch (learn.toLowerCase()) {
  case 'html':
    alert('Yeah that was pretty easy!');
    break;
  case 'css':
    alert('Yeah there is so much you can do to make things look how ever you want!');
    break;
  case 'javascript':
    alert('I know we ar just getting started but I can already see the potential of it');
    break;
}

// Outro

alert('Well ' + name + ' Since you said ' + videogames + ' to Video Games, here\'s your ' + drink + '. Let\'s get out of here. Later we can work on ' + learn + ' together.');

alert('Ok, now its time for me to  quiz you. Don\'t worry I only have 5 questions.')
// Question #6
// Worked with anthony C. on this loop

var score = 0;
var answer = '35';
var i = 0;


while (i < 4) {
  var guess = prompt('You get only 4 guesses, How old am I?');
  i++;
  if (guess < answer /* '35' */) {
    alert('Sorry too low.');
  }
  else if (guess > answer) {
    alert('You are too high.');
  }
  else if (guess === answer) {
    alert('You got it!!');
    score++;
    i = 4;
  }
}
alert('Ok I\'ll just tell you...... I\'m 35 years old.');

// Question #7
// Modified from code in demo repo

var score = 0;
var questions = ['Do I speak Spanish?', 'What color is my truck?', 'What city do I live in?', 'Whats my favorite thing to do?'];
var answers = ['Yes', 'Black', 'Everett', 'Camping'];
var response = '';

for (var i = 0; i < questions.length; i++) {
  var attempt = 0;
  alert('You get ' + parseInt(6 - attempt) + ' guesses');
  while (attempt < 6) {
    // prompt('You get only 6 guesses, try again.');
    response = prompt(questions[i]);
    attempt++;
    if (response.toLowerCase() === answers[i].toLowerCase()) {
      alert('Hey that\'s right!');
      score++;
    }
    if (response === answers[i]) {
      alert('You got it!!');
      attempt = 6;
    }
    else {
      alert('Sorry thats not correct!!');
    }
  }
}
alert('Well it looks like you got ' + score + ' correct, out of ' + questions.length);

//Multiple true answers in javascript array prompt? from Stack Overflow.com
//
// function welcome() {
//   var questions = [{
//       question: 'Are you ready to play?',
//       answer: 'yes',
//       affirm: 'Yay! You will be presented with a series of questions. If you answer a questions incorrectly, you cannot advance to the next...',
//       rebuttal: "No, you're definitely ready to play."
//   }];

//   for (var i = 0, l = questions.length; i < l; i++) {
//       answer = prompt(questions[i].question);
//       var correct = false;
//       while (correct === false)
//       if (answer !== questions[i].answer) {
//           alert(questions[i].rebuttal);
//           answer = prompt(questions[i].question);
//       } else {
//           alert(questions[i].affirm);
//           correct = true;
//       }
//   }
// }