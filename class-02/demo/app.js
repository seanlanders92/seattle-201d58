'use strict';


//var cat = 'Belle';

// string
var myString = 'my string';
var myinteger = 10;
var isCool = true;

if(isCool === true){
  // true condition
}

var coffee = prompt('What is amanda\'s favorite coffee place?');

if(coffee.toUpperCase() === 'STARBUCKS'){
  alert('Yes! You are right!');
}

var movie = prompt('what is your favorite movie?');

if(movie.toLowerCase() === 'frozen'){
  alert('You are right! Olaf would be proud!');
}

var answer = prompt('Hold old are your cats?');
if(answer === '9'){
  alert('You are correct');
} else{
  alert('you are wrong');
}

var fruit = "apple";

switch(fruit.toLowerCase()){
  case 'apple':
    alert('you picked an apple');
    break;
  case 'orange':
    alert('you picked an orange');
    break;
  default:
    alert('you chose something we didn\'t have');
}

// if(cat === 'Josie'){
//   alert('Hello JosieCat!');
// } else if(cat === 'Belle'){
//   alert('Hello Belle');
// } else{
//   alert('Hello kitty!');
// }
