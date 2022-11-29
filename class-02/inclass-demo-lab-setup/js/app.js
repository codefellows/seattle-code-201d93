'use strict';

console.log('Hey world hey!');

// TODO: GET USERS NAME - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// TODO: prompt them with 5 yes or no (y/n) question, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry, you got it wrong');
}

// TODO: GIVE a personalized message at the end
