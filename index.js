const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice${dice}.jpg`;
    diceEl.style.display = 'block';

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.style.display = 'none';
      alert(`Player ${activePlayer + 1} wins!`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceEl.style.display = 'none';
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
});
