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
document.querySelector('h3').style.visibility = 'hidden';

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

  Chart.defaults.font.size = 20;
  Chart.defaults.font.weight = 'bold';

  let chartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: 'white' },
        },
        x: {
          ticks: { color: 'white' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            padding: 30,
            font: {
              size: 16
            }
          },
        }
      }
    },
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
    document.querySelector('h3').style.visibility = 'visible';
    imgContainer.removeEventListener('click', handleClick);

    // ****** LOCAL STORAGE STARTS HERE ******
    // ! STEP 1 - STRINGIFY DATA FOR LOCAL STORAGE
    let stringifiedGoats = JSON.stringify(goatArray);

    console.log('Stringified Goats', stringifiedGoats);

    // ! STEP 2 - SET TO LOCAL STORAGE
    localStorage.setItem('myGoats', stringifiedGoats);
  }
}


function handleShowResults() {
  if (votingRounds === 0) {
    //  TODO: Call my chart helper function
    renderChart();
  }
}



// **** EXECUTABLE CODE *****

// ****** MORE LOCAL STORAGE DEMO ******

// ! STEP 3 - PULL DATA FROM LOCAL STORAGE

let retreivedGoats = localStorage.getItem('myGoats');

console.log('retreived goats>>>', retreivedGoats);

// ! STEP 4 - PARSE OUR LOCAL STORAGE DATA

let parsedGoats = JSON.parse(retreivedGoats);

console.log('parsed goats >>> ', parsedGoats);

// if (retreivedGoats) {
//   goatArray = parsedGoats;
// } else {
//   let bunnyGoat = new Goat('bunny-goat', 'png');
//   let coolGoat = new Goat('cool-goat');
//   let cruisinGoat = new Goat('cruisin-goat');
//   let floatGoat = new Goat('float-your-goat');
//   let goatHand = new Goat('goat-out-of-hand');
//   let kissingGoat = new Goat('kissing-goat');
//   let sassyGoat = new Goat('sassy-goat');
//   let smilingGoat = new Goat('smiling-goat');
//   let sweaterGoat = new Goat('sweater-goat');

//   goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatGoat, goatHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);
// }


//  ******* REBUILD GOATS USING CONSTRUCTOR *******

if (retreivedGoats) {
  for (let i = 0; i < parsedGoats.length; i++) {
    if (parsedGoats[i].name === 'bunny-goat') {
      let reconstructedBunnyGoat = new Goat(parsedGoats[i].name, 'png');
      reconstructedBunnyGoat.views = parsedGoats[i].views;
      reconstructedBunnyGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedBunnyGoat);
    } else {
      let reconstructedGoat = new Goat(parsedGoats[i].name);
      reconstructedGoat.views = parsedGoats[i].views;
      reconstructedGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedGoat);
    }
  }
} else {
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
}

console.log('goat array after if/else', goatArray);

console.log('OG Goatarry', goatArray);
renderImg();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
