'use strict';

// Tony is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Tony knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo

// ************ GLOBALS ******************
// HELPFUL FOR YOUR LAB!!
//  let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// ************ DOM WINDOWS **************

// STEP 1: WINDOW INTO THE DOM
let kittenSection = document.getElementById('kitten-profiles');

// console.dir(kittenSection);

// *********** HELPER FUNCTIONS / UTILITES ************
function randomAge(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// *********** OBJECT LITERALS ****************

// **** HELPFUL FOR START OF YOUR LAB *****
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
};



let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'toy mice', 'catnip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${this.name} is ${randomAge(3,12)} months old`;
  },

  render: function(){
    // ****** DOM MANIPULATION ******
    // STEP 2: Create an element

    let articleElem = document.createElement('article');

    // STEP 3: Give Context - skip
    // STEP 4: ADD IT TO THE DOM parent.appendChild(child)
    kittenSection.appendChild(articleElem);


    let h2Elem = document.createElement('h2');
    // h2Elem.textContent = this.name;
    h2Elem.innerText = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);

    // HELPFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'fish toy', 'treats'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  getAge: function () {
    this.age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM MANIPULATION ********

    let articleElem = document.createElement('article');
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'scratching'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/serena.jpeg',
  getAge: function () {
    this.age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM MANIPULATION ********

    let articleElem = document.createElement('article');
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


// ********** EXECUTABLE CODE ****************
frankie.getAge();
frankie.render();
jumper.getAge();
jumper.render();
serena.getAge();
serena.render();
console.log(frankie);
