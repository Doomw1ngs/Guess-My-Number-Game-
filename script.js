'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Selectors

// Check Button
document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⚠️ Please Enter A Number';
    // when player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🚀 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Highscore functionallity
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is not the same with secret number
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = score;
    } else {
      // When the score is 0
      document.querySelector('.message').textContent = '🤯 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', () => {
  // Reset score.
  score = 20;
  document.querySelector('.score').textContent = score;
  // Generate new secret number.
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset UI.
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  // Reset styles.
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
