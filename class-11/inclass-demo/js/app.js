'use strict';

console.log('hey there hey!');

// ******* GLOBALS *******
let goatArray = [];
let votingRounds = 15;


//  ****** DOM WINDOWS *******
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');


// ***** CONSTRUCTOR FUNCTION ******

function Goat(name, imgExtension = 'jpg'){
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
}

// ***** HELPER FUNCTIONS / UTILITIES *****

function randomIndex(){
  return Math.floor(Math.random() * goatArray.length);
}

function renderImg(){
  // TODO: 2 unique images and populate the images
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  // ** Validation to make sure numbers are unique **
  while(imgOneIndex === imgTwoIndex){
    // TODO: reassign one of the variables
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].img;
  imgTwo.src = goatArray[imgTwoIndex].img;
  imgOne.title = goatArray[imgOneIndex].name;
  imgTwo.title = goatArray[imgTwoIndex].name;
  imgOne.alt = `this is an image of ${goatArray[imgOneIndex].name}`;
  imgTwo.alt = `this is an image of ${goatArray[imgTwoIndex].name}`;

  // TODO: increase the number of views on the images that have been rendered
  goatArray[imgOneIndex].views++;
  goatArray[imgTwoIndex].views++;
}

// **** EVENT HANDLERS *****
function handleClick(event){
  // TODO: Identify what image was clicked on

  let imgClicked = event.target.title;

  console.log(imgClicked);

  // TODO: Increase the number of votes to that specific image
  for(let i = 0; i < goatArray.length; i++){
    if(imgClicked === goatArray[i].name){
      goatArray[i].votes++;
    }
  }
  // TODO: decrement voting rounds
  votingRounds--;

  // TODO: Rerender 2 new images
  renderImg();

  // TODO: once voting rounds have ended - not allow any more clicks
  if(votingRounds === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}


function handleShowResults(){
  // TODO: Display the results once the there are no more votes
  if(votingRounds === 0){
    for(let i = 0; i < goatArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${goatArray[i].name} - views: ${goatArray[i].views} & votes: ${goatArray[i].votes}`;
      resultsList.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }

}



// **** EXECUTABLE CODE *****
let bunnyGoat = new Goat('bunny-goat', 'png');
let coolGoat = new Goat('cool-goat');
let cruisinGoat = new Goat('cruisin-goat');
let floatGoat = new Goat('float-your-goat');
let goatHand = new Goat('goat-out-of-hand');
let kissingGoat = new Goat('kissing-goat');
let sassyGoat = new Goat('sassy-goat');
let smilingGoat = new Goat('smiling-goat');
let sweaterGoat = new Goat('sweater-goat');

goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatGoat, goatHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);

renderImg();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);

// console.log(goatArray);
