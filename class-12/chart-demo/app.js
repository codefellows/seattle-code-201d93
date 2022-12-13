'use strict';

const ctx = document.getElementById('myChart');

// ** 1st arg - canvas element
// ** 2nd arg - object

let chartObj = {
  type: 'bar',
  data: {
    labels: ['Cat', 'Dog', 'Fish', 'Birds', 'Snakes', 'Frog', 'Rabbit'], // labels on the bottom of chart
    datasets: [{
      label: '# of Views',
      data: [30, 19, 3, 5, -2, 3, 15],
      borderWidth: 3,
      backgroundColor: ['pink', 'black']
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
}


new Chart(ctx, chartObj);
