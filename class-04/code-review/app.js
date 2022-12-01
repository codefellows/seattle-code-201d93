'use strict';


// TODO: Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

// DONE: Set a number for them to guess
let myNum = 30;

// TODO: Indicates through an alert if the guess is “too high”

// TODO: Indicate if “too low”.

// TODO: It should give the user exactly four opportunities to get the correct answer. Consider using a loop of some sort.
for(let i = 0; i < 4; i++){
  let questionSixGuess = +prompt('Guess what number I am thinking about....');

  if(questionSixGuess > myNum){
    alert('Sorry too high');
  } else if(questionSixGuess < myNum){
    alert('Sorry too low');
  } else if(questionSixGuess === myNum){
    alert('You got it right!');
    break;
  }

  if(i === 3){
  alert('you are out of attempts, the answer was 30');
  }
}

// TODO: After all attempts have been exhausted, tell the user the correct answer.
// ** if attempts === 0 -> alert the user the correct answer




// TODO: Add a 7th question that has
// TODO: multiple possible correct answers that are stored in an array.
// TODO: Give the user 6 attempts to guess the correct answer.
// TODO: The guesses will end once the user guesses a correct answer or
// TODO: they run out of attempts.
// TODO: Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

function boyBandGuess(){

  let boyBands = ['backstreet boys', 'take that', 'bts', 'kriss kross'];

  for(let i = 0; i < 6; i++){ // slow loop
    let questionSevenGuess = prompt('What is one of my fav boy bands').toLowerCase(); // nsync

    for(let j = 0; j < boyBands.length; j++){  // fast loop
      if(questionSevenGuess === boyBands[j]){
        alert('OMG I LOVE THEM!');
        score++;
        i = 6;
        break;
      }
    }
  }
}

boyBandGuess();
