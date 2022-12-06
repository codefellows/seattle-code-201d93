'use strict';

//// : Store the min/max hourly customers, and the average cookies per customer, in object properties.


//// : Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// ? what is a method? function that LIVES in an object - obj.method()

// TODO: Calculate and store the simulated amounts of cookies purchased
// * STORE IN AN ARRAY

//  TODO: for each hour at each location using average cookies purchased and the random number of customers generated.
// * NEED A FOR LOOP - what am I looping through? HOURS ARRAY
// * IN MY FOR LOOP - CALCULATE cookies based on avg Cookie & rando cust


// TODO: Store the results for each location in a separate array… FIGURE OUT HOW TO ADD TO AN ARRAY



// TODO: Display the values of each array as unordered lists in the browser.
// TODO: Calculating the sum of these hourly totals; your output for each location should look like this

// **** GLOBAL VARIABLES ****
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// **** DOM WINDOW ****

let storeSection = document.getElementById('stores');

// **** OBJECT LITERALS ****
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
      // this.total += cookiesNeeded;
    }
  },
  render: function () {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);


    // TODO: loop through cookies Array
    // create li's for each cookie value
    // give textContent for that li
    // ** `${hours[i]}: ${this.cookiesBought[i]} cookies`
    // append it to the ul

  }
};

// custPerHr -> 30 ppl buy 6.3 each -- cookiesNeeded = custPerHr * avgCookieBought
// accessing properties -
// object.property
// object.method();

// **** EXECUTABLE CODE ****
seattle.render();
