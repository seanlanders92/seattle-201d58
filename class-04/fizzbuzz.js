'use strict';

function fizzbuzz() {
  // Print Number from 0 - 100
  for (var i = 0; i <= 100; i++) {

    // If a number id divisble by both print 'fizzbuzz'
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }

    // if a number is divisble by 3 print 'fizz'
    else if (i % 3 === 0) {
      console.log('fizz');
    }

    // if a number is divisible by 5 print 'buzz'
    else if (i % 5 === 0) {
      console.log('buzz');
    }

    else {
      console.log(i);
    }
  }
}

fizzbuzz();