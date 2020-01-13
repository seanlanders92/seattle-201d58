'use strict';

var catArticle = document.getElementById('cat');

var cat = {
  name: 'Josie',
  age: 9,
  weight: 18
}

var newCatUL = document.createElement('ul');
newCatUL.textContent = cat.name;

// Created one LI
var ageLI = document.createElement('li');
ageLI.textContent = `Age: ${cat.age}`;
// attached the li to the UL
newCatUL.appendChild(ageLI);

// Created a second LI
var weightLI = document.createElement('li');
weightLI.textContent = `Weight: ${cat.weight}`;
// Attached the LI to the UL
newCatUL.appendChild(weightLI);

catArticle.append(newCatUL);

var numbersUL = document.createElement('ul');

for(var i=0; i < 5; i++){
  var newTag = document.createElement('li');
  newTag.textContent = i;
  numbersUL.append(newTag);
}

catArticle.appendChild(numbersUL);