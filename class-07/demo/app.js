//Open hours
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//RNGESUS//
function getRandomInt(customerMin, customerMax) {
    var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
    return Math.floor(randomNumber);
}
console.log(getRandomInt(23,65));

//store object//
var seattleStore = {
  name: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [],
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i=0; i<hours.length; i++){
    // create a variable named customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage); 
      // add the totalCookies to the salesPerHourArray
      this.salesPerHour.push(totalCookiesPerHour)
    }
    console.log(this.salesPerHour);
  },
  render: function(){
    this.getHourlySales();
    // output HTML to the DOC
    // Unordered list with the name of the city
    var storesArticle = document.getElementById("stores");
    var cityUL = document.createElement('ul');
    var cityHeader = document.createElement('h1');
    cityHeader.textContent = this.name;
    cityUL.appendChild(cityHeader);
    // I need to create a LI for every hour the store is open
    for(var i=0; i < hours.length; i++){
      var hourLI = document.createElement('li');
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    // create the total
    var total = 0;
    for(var i =0; i< this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);

    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay : ## cookies
  }
}

var myTable = document.getElementById('myTable');
var coffeeArray = ["Latte", "Mocha", "Americano", "Cappiccino"];

var coffeeTable = document.createElement('table');
var headerRow = document.createElement('tr');

for(var i=0; i < coffeeArray.length; i++){
    var tableHeader = document.createElement('th');
    tableHeader.textContent = coffeeArray[i];
    headerRow.appendChild(tableHeader);
}
coffeeTable.appendChild(headerRow);

for(var i = 0; i < 4; i++){
    var row = document.createElement('tr');
        for(var j = 0; j < coffeeArray.length; j++){
            var tableData = document.createElement('td');
            tableData.textContent = Math.floor(getRandomInt(0, 100));
            row.appendChild(tableData);
        }
    coffeeTable.appendChild(row);
}

myTable.appendChild(coffeeTable);

seattleStore.render();


function Coffee(size, type, price){
    // set our properties using this
    this.size = size;
    this.coffeeType = type;
    this.potato = price;
    this.temperature = 180;
    this.ingredients = [];
    this.generateHourSales = function(){
        console.log('hello');
    }
}

Coffee.prototype.render = function(){
    // put rendering logic here
}
// to Create an object using a constructor function
// we INSTANTIATE the object using the construction function

var amandasLatte = new Coffee("Large", "latte", 5);

console.log(amandasLatte.size);
amandasLatte.render();