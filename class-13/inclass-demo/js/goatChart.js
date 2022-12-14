'use strict';

let retreivedGoats = localStorage.getItem('myGoats');

console.log(retreivedGoats);

let parsedGoats = JSON.parse(retreivedGoats);

let canvasElem = document.getElementById('chart');

function renderChart() {
  // TODO: Build out my chart obj
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < parsedGoats.length; i++) {
    goatNames.push(parsedGoats[i].name);
    goatVotes.push(parsedGoats[i].votes);
    goatViews.push(parsedGoats[i].views);
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


if(retreivedGoats){
  renderChart();
}
