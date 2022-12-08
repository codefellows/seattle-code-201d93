'use strict';


// TODO STEP 1: GRAB THE ELEMENT THAT WE WANT TO LISTEN TO
let myform = document.getElementById('my-form');


// TODO STEP 2: ATTACH OUR EVENT LISTENER TO THE ELEMENT - 2 ARGS (EVENT TYPE, AND THE HANDLER)
myform.addEventListener('submit', handleSubmit);


// TODO STEP 3: DEFINE OUR EVENT HANDLER - CODE TO RUN ON EVENT
function handleSubmit(event){
  event.preventDefault();

  console.dir(event.target);

  let name = event.target.userName.value;
  console.log(name);

  // ! INPUTS RETURN STRING DATA TYPES
  console.log(typeof +event.target.age.value);

  let password = event.target.password.value;
  console.log(password);
}





// BOX CLICK DEMO
// Step 1: Grab our element we are going to listen to
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');


// // parameter labeled event/e

// function handleClick(event) {
//   // console.log('this is the event', event);
//   // console.dir(event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// // 1st arg is the event to listen to
// // 2nd arg handleClick - event handler or Callback function
// myContainer.addEventListener('click', handleClick);
