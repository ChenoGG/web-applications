import './styles.css';

// TODO: Bruk getElementById til å hente HTML med #id
// TODO: Bruk querySelector til å hente knappen
const numbersUl = '';
const guessUl = '';
const button = '';
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = '';
  // TODO: Bruk .map for å hente ut verdiene i input feltene
  return Array.from(answers).map();
};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = numbers.sort().join('') === guess.join('');
  if (isCorrect) {
    alert('Du sorterte riktig');
  }
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  for (let _ of _) {
    const li = ``;
    guessUl.innerHTML += li;
  }
};

const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (let _ of _) {
    const li = ``;
    numbersUl.innerHTML += li;
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener('click', checkNumberSeq);
