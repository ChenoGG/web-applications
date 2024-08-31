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
  // TODO: Bruk Array.from() for å gjøre om verdiene du får til "ekte" liste
  // TODO: Bruk .map for å hente ut verdiene i input feltene og returner denne
};

const checkNumberSeq = () => {
  // TODO: Lag logikken som sjekker om du har sortert riktig
  // Tips: Bruk getGuess() for å få "det som er gjettet"
  // Tips: Bruk .sort() .join()
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
};

const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener('click', checkNumberSeq);
