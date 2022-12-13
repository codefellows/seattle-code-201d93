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

// **** CANVAS ELEMENT FOR CHART DEMO ****

let canvasElem = document.getElementById('chart');


// ***** CONSTRUCTOR FUNCTION ******

function Goat(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
}

// ***** HELPER FUNCTIONS / UTILITIES *****

function randomIndex() {
  return Math.floor(Math.random() * goatArray.length);
}

function renderImg() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].img;
  imgTwo.src = goatArray[imgTwoIndex].img;
  imgOne.title = goatArray[imgOneIndex].name;
  imgTwo.title = goatArray[imgTwoIndex].name;
  imgOne.alt = `this is an image of ${goatArray[imgOneIndex].name}`;
  imgTwo.alt = `this is an image of ${goatArray[imgTwoIndex].name}`;

  goatArray[imgOneIndex].views++;
  goatArray[imgTwoIndex].views++;
}

// ****** HELPER FUNCTION TO RENDER CHART *****
function renderChart() {
  // TODO: Build out my chart obj
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < goatArray.length; i++) {
    goatNames.push(goatArray[i].name);
    goatVotes.push(goatArray[i].votes);
    goatViews.push(goatArray[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        borderWidth: 1,
        backgroundColor: 'pink'
      },
      {
        label: '# of Views',
        data: goatViews,
        borderWidth: 1,
        backgroundColor: 'white'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // TODO: use the Chart Constructor - pass in canvas elem, and my chartObj with all the goat data
  new Chart(canvasElem, chartObj);
}

// **** EVENT HANDLERS *****
function handleClick(event) {

  let imgClicked = event.target.title;

  for (let i = 0; i < goatArray.length; i++) {
    if (imgClicked === goatArray[i].name) {
      goatArray[i].votes++;
    }
  }

  votingRounds--;

  renderImg();

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}


function handleShowResults() {
  if (votingRounds === 0) {
    //  TODO: Call my chart helper function
    renderChart();
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
