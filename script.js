'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Selectors.
const body = document.querySelector('body');
const displayedNumber = document.querySelector('.number');
const displayHighscore = document.querySelector('.highscore');
const playerInputNumber = document.querySelector('.guess');
const displayScore = document.querySelector('.score');

// Functions.
const displayMessage = (message) => {
  return (document.querySelector('.message').textContent = message);
};

// Check Button
document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(playerInputNumber.value);
  // When there is no input
  if (!guessNumber) {
    displayMessage('⚠️ Please Enter A Number');
    // when player wins
  } else if (guessNumber === secretNumber) {
    displayMessage('🚀 Correct Number!');
    displayedNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    displayedNumber.style.width = '30rem';
    // Highscore functionallity
    if (score > highScore) {
      highScore = score;
      displayHighscore.textContent = highScore;
    }
    // When guess is not the same with secret number
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      playerInputNumber.value = '';
      displayScore.textContent = score;
    } else {
      // When the score is 0
      displayMessage('🤯 You Lost The Game!');
      displayScore.textContent = 0;
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', () => {
  // Reset score.
  score = 20;
  displayScore.textContent = score;
  // Generate new secret number.
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset UI.
  displayedNumber.textContent = '?';
  displayMessage('Start guessing...');
  playerInputNumber.value = '';
  // Reset styles.
  body.style.backgroundColor = '#222';
  displayedNumber.style.width = '15rem';
});
