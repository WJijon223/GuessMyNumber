'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess !== randomNumber) {
    if (score > 1) {
      if (guess > randomNumber) {
        document.querySelector('.message').textContent = 'Guess lower';
        score -= 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Guess higher';
        score -= 1;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥';
    }
  } else {
    document.querySelector('.message').textContent = 'Correct!';
  }
});
