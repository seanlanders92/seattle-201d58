'use strict';

// target our order form from the html
var orderForm = document.getElementById('orderForm');
var orders = document.getElementById('orders');


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
  updateStorage();
}

// set the global array to empty
Coffee.drinks = [];


// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.value;
  var dType  = drink.drinkType.value;
  var milk = drink.milk.value; 

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();

}

function updateStorage(){
 // convert the local array to a JSON string
  var arrayString = JSON.stringify(Coffee.drinks);
  // store the newly created string array into Local Storage
  localStorage.setItem('coffee', arrayString);
}

function getCoffeeOrders(){

  if(localStorage.length > 0){
    console.log('hello');
  // retrieve data from localStorage
  var coffeeOrders = localStorage.getItem('coffee');
  // use JSON parse to show the new(converted) JS object
  var dataCoffee = JSON.parse(coffeeOrders);
  // set our current array to the data retrieved from LocalStorage
  Coffee.drinks = dataCoffee;
  } 
  // present the orders to the DOM using DOM manipulation
  renderOrders();
}


// Alternative way of constructing an object
function getCoffeeOrdersThroughConstructor(){
  // retrieve my items from localStorage
  var data = localStorage.getItem('coffee');
  // convert the data (array) from a stirng into something we can use in JS
  var coffeeData = JSON.parse(data);
  for(var i=0; i < coffeeData.length; i++){
    new Coffee(coffeeData[i].name, coffeeData[i].size,coffeeData[i].milk, false, coffeeData[i].drinkType);
    console.log("drinks", Coffee.drinks);
  }
  renderOrders();
}

function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";
  console.log(Coffee.drinks);

  // go through the array and output the details of each drink in the array
  for(var i=0; i < Coffee.drinks.length; i++){
    var drinkLI = document.createElement('li');
    var infoP = document.createElement('p');
    var temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }

}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit)

getCoffeeOrders();
// getCoffeeOrdersThroughConstructor();

