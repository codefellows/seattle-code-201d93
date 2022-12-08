'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

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
let kittenCaboodle = [];

// ************ DOM WINDOWS **************

let kittenSection = document.getElementById('kitten-profiles');

// ******* STEP 1: GRAB THE ELEMENT TO LISTEN TO ******
let myForm = document.getElementById('kitty-form');

// *********** HELPER FUNCTIONS / UTILITES ************
function randomAge(min, max) {
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderAll(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    kittenCaboodle[i].getAge();
    kittenCaboodle[i].render();
  }
}

// ************** CONSTRUCTOR FUNCTION *************

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;
}

// ******* PROTOTYPE METHODS *********

Kitten.prototype.getAge = function () {
  this.age = `${this.name} is ${randomAge(3, 12)} months old`;
};

Kitten.prototype.render = function () {
  let articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.innerText = this.name;
  articleElem.appendChild(h2Elem);

  let pElem = document.createElement('p');
  pElem.textContent = this.age;
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

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids';
  row1.appendChild(th3Elem);

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);

};


//  ******* STEP 3: DEFINE OUR EVENT HANDLER ********

function handleSubmit(event){
  event.preventDefault();

  // TODO: GRAB THE INFO COMING OUT OF THE FORM

  let kittyName = event.target.kittyName.value;
  let photo = event.target.photo.value;

  let interests = event.target.interests.value;
  // mice,food,sleeping

  interests = interests.split(',');

  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithKids = event.target.isGoodWithKids.checked;


  // TODO: CREATE A NEW KITTEN OBJECT USING MY CONSTRUCTOR

  let newKitten = new Kitten(kittyName, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo);
  kittenCaboodle.push(newKitten);

  // TODO: CALL NECESSARY METHODS TO HAVE THE NEW OBJECT DISPLAYED
  newKitten.getAge();
  newKitten.render();

  myForm.reset();
  // console.log(newKitten);
}



// ********** EXECUTABLE CODE ****************

let frankie = new Kitten('Frankie', ['wet food', 'toy mice', 'catnip'], true, true, true, 'img/frankie.jpeg');
let jumper = new Kitten('Jumper', ['dry food', 'mouse toy', 'treats'], true, false, false, 'img/jumper.jpeg');
let serena = new Kitten('Serena', ['mice', 'lasers', 'scratching'], false, false, false, 'img/serena.jpeg');

kittenCaboodle.push(frankie, jumper, serena);
renderAll();

// ***** STEP 2: ADD MY EVENT LISTENER ******
myForm.addEventListener('submit', handleSubmit);
