'use strict';

function Pokemon(name, types, hp, def, att) {
  this.name = name;
  this.types = types;
  this.hp = hp;
  this.defense = def;
  this.attack = att;
}

Pokemon.prototype.speak = function () {
  console.log('RAAAWR');
}

Pokemon.prototype.render = function () {
  var card = document.getElementById('card');

  var heading = document.createElement('h2');
  heading.textContent = this.name;
  card.appendChild(heading);

  var types = document.createElement('ul');
  for (var i = 0; i < this.types.length; i++) {
    var typeText = document.createElement('li');
    typeText.textContent = this.types[i];
    types.appendChild(typeText);
  }
  card.appendChild(types);

  var stats = document.createElement('ul');

  var hp = document.createElement('li');
  hp.textContent = this.hp;
  stats.appendChild(hp);

  var defense = document.createElement('li');
  defense.textContent = this.defense;
  stats.appendChild(defense);

  var attack = document.createElement('li');
  attack.textContent = this.attack;
  stats.appendChild(attack);

  var button = document.createElement('button');
  button.textContent = 'Speak';
  button.addEventListener('click', this.speak);

  card.appendChild(stats);
  card.appendChild(button);
}


var pokemonForm = document.getElementById('add-pokemon');

pokemonForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // we need this a the start

  var name = event.target.name.value;
  var types = event.target.types.value.trim().split(',');
  var hp = parseInt(event.target.hp.value);
  var defense = parseInt(event.target.defense.value);
  var attack = parseInt(event.target.attack.value);

  event.target.name.value = null;

  var newPokemon = new Pokemon(name, types, hp, defense, attack);

  console.log(newPokemon);
  newPokemon.render();
}