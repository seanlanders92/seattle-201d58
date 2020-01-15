# Class 08 CSS Layouts

## Conceptual Review

  - Objects / Constructors / The DOM
    - In a repl, Create an object literal from your favorite pokemon:
 
```js
var pokemon = {
  name: 'Farfetch\'d',
  hp: 2,
  attack: 3,
  defense: 3,
  sa: 3,
  sd: 3,
  speed: 3,
  statusCondition: '',
  innerFocus: function(status) {
    if (status === 'posion') {
      this.sd += 1;
    } else {
      this.sd += 2;
    }
    return true;
  },
}
```

    - Now do convert our object literal to an object constructor

```js
function Pokemon(name, hp, attack, defense, sa, sd, speed) {
  this.name = name;
  this.hp = hp;
  this.defense = defense;
  this.sa = sa
  this.sd = sd
  this.speed = speed;
  this.attack = attack;
  this.types = [];
}

Pokemon.prototype.innerFocus = function(status) {
  if (status === 'posion') {
    this.sd += 1;
  } else {
    this.sd += 2;
  }
  return true;
}

```

  - Finally let's create a render method!

```js
Pokemon.prototype.render = function() {
  var listEl = document.getElementById('pokemon-stats');
  var name = document.createElement('li');
  var hp = document.createElement('li');
  var defense = document.createElement('li');
  var sa = document.createElement('li');
  var sd = document.createElement('li');
  var speed = document.createElement('li');
  var attack = document.createElement('li');
  name.textContent = this.name;
  defense.textContent = this.defense;
  attack.textContent = this.attack;
  listEl.appendChild(name);
  listEl.appendChild(defense);
  listEl.appendChild(attack);
}
```

## CSS Layouts

