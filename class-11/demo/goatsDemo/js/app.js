'use strict';

var goatParent = document.getElementById('goats');
var leftGoat = document.getElementById('leftGoat');
var rightGoat = document.getElementById('rightGoat');

// null is nothing
// set our global indexes
var leftIndex = null;
var rightIndex = null;


// control the number of voting rounds
var goatVotes = 0;
var totalRounds = 10;

// Constructor Function
function Goat(name, image){
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // adding the new goat to the array
  Goat.allImages.push(this);
}

// get a random number function
function randomGoat(){
  // inclusive to 0 exclusive to the length
  var randomNumber = Math.floor(Math.random() * Goat.allImages.length)
  return randomNumber;
}

function renderGoat(){
  // keep setting the left and right index of the variables to images while they are not the same

  // confirm the goats are not the same
  do {
    // get random indexes of the arrays
    leftIndex = randomGoat();
    rightIndex = randomGoat();
    // keep running if they are duplicates
  } while(leftIndex === rightIndex)

  // they have been viewed:
  Goat.allImages[leftIndex].views++;
  Goat.allImages[rightIndex].views++;

  goatLeft.src = Goat.allImages[leftIndex].image;
  goatRight.src = Goat.allImages[rightIndex].image;
}

// Create our goat clicking function. must be defined before our event listener
var handleClickOnGoat = function(event){
  var goatClicked = event.target.id;

  if(goatClicked === 'goatLeft' || goatClicked === 'goatRight'){
    goatVotes++;
    if(goatClicked === 'goatLeft'){
      Goat.allImages[leftIndex].clicked++;
  
    } else if(goatClicked === 'goatRight'){
       Goat.allImages[rightIndex].clicked++;
      }
  
  }
  else{
    alert('you clicked wrong');
  }

  if(goatVotes === totalRounds ){

    goatParent.removeEventListener('click', handleClickOnGoat);
    alert('thank you for your votes');

    for(var i = 0; i < Goat.allImages.length; i++){
      var goat = Goat.allImages[i];
      console.log(`${goat.name} received ${goat.clicked} votes with ${goat.views} views.`);
    }
  }else{
    renderGoat();
  }
  // console.log(sassyGoat);
  // console.log(sweaterGoat);

}

// create the array for the goats!

Goat.allImages = [];

// instantiating new Goats and pushing them into an array
new Goat('Sweater Goat', '/assets/sweater-goat.jpg');
new Goat('Sassy Goat', '/assets/sassy-goat.jpg');
new Goat('Crusin\' goat', '/assets/cruisin-goat.jpg');
new Goat('float your goat', '/assets/float-your-goat.jpg');
new Goat('goat away', '/assets/goat-away.jpg');
new Goat('Totes My Goats', '/assets/totesmygoats.png');
new Goat('Smiling Goat', '/assets/smiling-goat.jpg');
new Goat('Kissing Goat', '/assets/kissing-goat.jpg');


renderGoat();


// attach an event onto our goat section
goatParent.addEventListener('click', handleClickOnGoat)