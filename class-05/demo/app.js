'use strict';

function ageGuess() {
  var age = 30;
  var userResponse = null;
  var i = 4;
  for (i; i > 0; i--) {
    userResponse = prompt('Guess Jacob\'s age?');
    if (Number(userResponse) === age) {
      alert('You guessed correctly!!');
      break;
    } else if (Number(userResponse) > age) {
      alert('Your guess was too high, you have ' + (i - 1) + ' guesses left');
    } else if (Number(userResponse) < age) {
      alert('Your guess was too low, you have ' + (i - 1) + ' guesses left');
    } else {
      alert('Is that a number??');
    }
  }
  if (i === 0) {
    alert('I am ' + age + ' years old');
  }
}

function favoriteFoods() {
  var foods = ['mac & cheese', 'sushi', 'bacon'];
  var foodString = '';
  for (var j = 0; j < foods.length; j++) {
    foodString += foods[j] + ' ';
  }
  var guess = null;
  var attempts = 6;
  askForInput: while (attempts > 0) {
    guess = prompt('What is one of my favorite foods?, you have ' + attempts + ' left');
    var correct = false;
    checkArray: for (var i = 0; i < foods.length; i++) {
      if (guess.toLowerCase() === foods[i].toLowerCase()) {
        correct = true;
        alert('yup, you guessed correctly! My favorite foods are ' + foodString);
        break askForInput;
      }
    }
    if (!correct) {
      alert('Wrong!! Guess again');
    }
    attempts--;
    if (attempts === 0) {
      alert('My favorite foods are ' + foodString);
    }
  }
}

// ageGuess();
favoriteFoods();