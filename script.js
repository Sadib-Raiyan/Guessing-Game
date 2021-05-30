'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let result = Number(document.querySelector('.guess').value);

  if (!result) {
    displayMessage('Please Input a valid number 💁‍♂️');
  } else if (result === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore == score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (result !== secretNumber) {
    if (score > 1) {
      displayMessage(result > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🙃 Game Over loser');

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  displayMessage('Start guessing... 🤷‍♂️');

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
