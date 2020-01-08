# Class 03 Loops!!

## Arrays

- What is an Array?
  - An indexed based list ( a bucket of things )
  
```js
var userScore = [];

userScore[0] = 10;
userScore[1] = 20;

userScore.push(30);

console.log(userScore) // [10, 20, 30]
console.log(userScore[2]) // 30


userScore.unshift(-10);

console.log(userScore) // [-10, 10, 20, 30]
console.log(userScore[0]) // -10
```

## loops

- What is a loop?
  - Code that runs over and over until a condition is met
  - Used to control the flow of our js.

```js
if (true) {
  console.log('hello);
}

// For loops, which are explicitly declarative
var i = 0;
for (/* a statement that intializes a starting point */ i; /* define a condition for the loop to end */ i === 0; /*An operation to perfrom at each iteration */ i = i + 1) {

}

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// while loops which just run based on coditional logic
while (i < 10) {
  console.log('this will run 10 times');
  i++;
}

do {
  console.log('this will run once');
} while (i < 10)
```

- For loops plus array = super friends

```js
var userScores = [10, 20, 30];
console.log(userScores.length) // 3;
var highScores = [];


for (var i = 0; i < userScores.length; i++) {
  console.log(userScores[i]);
  if (userScores[i] > 20) {
    highScores.push(userScores[i]);
  }
}

```


## HTML Box Model

- A way for developers to conceptualize their HTML elements

- We want to think of these as boxes within boxes
```html
<div>
  <h1></h1>
  <p></p>
</div>
```

- Building a layout
  - Margin
  - Padding
  - Border
  - Content ( width / height / position )

- Positions of HTML element
  - Absolute - I want an element to position itself relative to other elements.
  - relative - I wast an element to position itselft relative to its current position, while not disturbing the layout of elements around it;
  - fixed - Moves elements relative to the viewport.
  - (Static / sticky )