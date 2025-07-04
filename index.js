const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn-roll');
const newBtn = document.querySelector('.btn-new');
const holdBtn = document.querySelector('.btn-hold');

let player1Score = 0;
let player2Score = 0;
let current = 0;
let currentPlayer = 1;
let gameActive = true;

function switchTurn() {
  document.getElementById(`current-${currentPlayer - 1}`).textContent = 0;
  current = 0;
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

rollBtn.addEventListener('click', function () {
  if (!gameActive) return;

  const randomNum = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice${randomNum}.jpg`;
  dice.style.display = 'block';

  if (randomNum !== 1) {
    current += randomNum;
    document.getElementById(`current-${currentPlayer - 1}`).textContent = current;
  } else {
    switchTurn();
  }
});

holdBtn.addEventListener('click', function () {
  if (!gameActive) return;

  if (currentPlayer === 1) {
    player1Score += current;
    document.getElementById('score-0').textContent = player1Score;
    if (player1Score >= 100) {
      gameActive = false;
      dice.style.display = 'none';
      alert('Player 1 wins!');
      return;
    }
  } else {
    player2Score += current;
    document.getElementById('score-1').textContent = player2Score;
    if (player2Score >= 100) {
      gameActive = false;
      dice.style.display = 'none';
      alert('Player 2 wins!');
      return;
    }
  }

  switchTurn();
});

newBtn.addEventListener('click', function () {
  gameActive = true;
  player1Score = 0;
  player2Score = 0;
  current = 0;
  currentPlayer = 1;
  dice.style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
});
