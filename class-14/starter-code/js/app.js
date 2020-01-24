'use strict';

// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.allItems = items;
};

Cart.prototype.addItem = function (product, quantity) {
  var newItem = new CartItem(product, quantity);
  this.allItems.push(newItem);
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function () {
  var arrayString = JSON.stringify(this);
 localStorage.setItem('cart', arrayString);
};

Cart.prototype.removeItem = function (index) {
 this.allItems.splice(index, 1);
 this.saveToLocalStorage();
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];
Cart.allItems = [];
function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

var dropDown = document.getElementById('items');
var items = document.createElement('option');

for (var i = 0; i < Product.allProducts.length; i++) {
  var items = document.createElement('option');
  items.textContent = Product.allProducts[i].name;
  dropDown.appendChild(items);
}

function handleAddToCart(event) {
  event.preventDefault();
  
  var quantity = parseInt(event.target.quantity.value);
  var productName = event.target.items.value;
  var product;
  
  for (var i = 0; i < Product.allProducts.length; i++) {
    
    if (Product.allProducts[i].name === productName) {
      product = Product.allProducts[i];
      break;
    }
  }
  cart.addItem(product, quantity);
  cart.saveToLocalStorage();
}

var catalog = document.getElementById('catalog');
catalog.addEventListener('submit', handleAddToCart);


