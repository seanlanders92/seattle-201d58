'use strict';
var img0 = document.getElementById('img0');
var img0 = document.getElementById('img1');
var img0 = document.getElementById('img2');

var allGoats = [];
function GoatMaker(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
  allGoats.push(this);
}

new GoatMaker('cruisin', './assets/cruisin-goat.jpg');
new GoatMaker('float-your', './assets/float-your-goat.jpg');
new GoatMaker('goat-away', './assets/goat-away.jpg');
new GoatMaker('goat-out-of-hand', './assets/goat-out-of-hand.jpg');
new GoatMaker('kissing', './assets/kissing-goat.jpg');
new GoatMaker('sassy', './assets/sassy-goat.jpg');
// new GoatMaker('cruisin', './assets/cruisin-goat.jpg');
// new GoatMaker('cruisin', './assets/cruisin-goat.jpg');
// new GoatMaker('cruisin', './assets/cruisin-goat.jpg');

console.log(allGoats);

// generate a random product from allGoats
function generateRandomGoat() {
  var index = Math.floor(Math.random() * allGoats.length);
  return index;
}

// populate an array of goats;
function populateGoats() {
  var result = [];
  result.push(allGoats[generateRandomGoat()]);
  do {
    var goat = allGoats[generateRandomGoat()];
    for (var i = 0; i < result.length; i++) {
      var found = false;
      if (result[i] === goat) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(goat);
    }
  } while (result.length < 3)
  return result;
}

// loop through an array of goats, and render them to our HTML elements
function renderGoats() {
  var randomGoats = populateGoats();
  for (var i = 0; i < randomGoats.length; i++) {
    var imgEl = document.getElementById('img' + i);
    // imgEl.src = randomGoats[i].path;
    imgEl.setAttribute('src', randomGoats[i].path);
    imgEl.setAttribute('alt', randomGoats[i].name);
    imgEl.addEventListener('click', handleClick);
  }
}

// loop through my allGoats, and if my event.target.alt === allGoats[i]name > increment clicks
function handleClick(event) {
  for (var i = 0; i < allGoats.length; i++) {
    if (allGoats[i].name === event.target.alt) {
      allGoats[i].clicks++;
    }
  }
  console.log(allGoats);
  renderGoats();
}


// creates click data, and passes that into a chart js constructor
var button = document.getElementById('draw');
button.addEventListener('click', renderChart);
function renderChart() {
  var labelData = [];
  var clickData = [];
  for (var i = 0; i < allGoats.length; i++) {
    labelData.push(allGoats[i].name);
    clickData.push(allGoats[i].clicks);
  }

  var ctx = document.getElementById('my-chart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelData,
      datasets: [{
        label: '# of Clicks',
        data: clickData,
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }, {
        label: '# of Views',
        data: [0, 3, 5, 2, 6, 3, 7, 3, 2],
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

renderGoats();

