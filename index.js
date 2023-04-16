const diceEl = document.getElementById('dice');
const coinEl = document.getElementById('coin');
const rollBtn = document.getElementById('rollBtn');
const flipBtn = document.getElementById('flipBtn');

const rollDice = () => {
const randomNum = Math.floor(Math.random() * 6) + 1;
diceEl.innerHTML = randomNum;
diceEl.classList.add('shake');
setTimeout(() => {
diceEl.classList.remove('shake');
}, 500);
};

const flipCoin = () => {
const randomNum = Math.floor(Math.random() * 2) + 1;
coinEl.innerHTML = randomNum === 1 ? 'Heads' : 'Tails';
coinEl.classList.add('flip');
setTimeout(() => {
coinEl.classList.remove('flip');
}, 500);
};

rollBtn.addEventListener('click', rollDice);
flipBtn.addEventListener('click', flipCoin);