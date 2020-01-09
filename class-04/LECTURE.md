# Class 04 Functions!!!

- We can create reusable peices of code with functions!!!

## Function declaration:

- Creating our own to be reused wherever that function is created / imported.

```js
// our first function declaration
function firstFunction(/* parameters go here */) {
  // function logic
  console.log('this came from firstFunction');
}

```

## function invocation

```js
firstFunction();
```

## function parameters

```js
// These are function parameters when we are defining them, think of them as function specific variables.
var input = prompt('Give me a number');
function addNumbersFromInput(num1, num2) {
  console.log(num1 + num2 + input);
}
```

## function argument

```js
// these are known as arguments, when a function is invokes.
addNumbersFromInput(2,3);
```

## function return statements

```js

function sumNumber(num1, num2) {
  return num1 + num2;
}

function printNumbers(numbers) {
  console.log(numbers);
}

var numbers = returnsNumber(2, 3);
printNumbers(numbers);
```

## Anonymous Functions

```js

var anonFunction = function(param1, param2) {
  // logic
}
anonFunction(1, 2);

// Run function Immediately with IIFE
var sum = (function(param) {
  return 4 + 3;
})(arg);

```

## Global vs Local Varaibles

- Where are variables available to functions and scripts.
  - Local variables are only available within the code block they are defined.
  - Global variables are available everywhere in the file they are defined.
  
```js
var global = 3;

function addTwo(num) {
  var local = 2;

  console.log(global);
  return num + local;
}

console.log(global);
console.log(local);
```
