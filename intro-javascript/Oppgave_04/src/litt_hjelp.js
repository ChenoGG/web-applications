//import './styles.css';

// TODO: Bruk getElementById til å hente HTML med #id
// TODO: Bruk querySelector til å hente knappen
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [2, 1, 8, 5, 4];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  // TODO: Bruk Array.from() for å gjøre om verdiene du får til "ekte" liste
  // TODO: Bruk .map for å hente ut verdiene i input feltene og returner denne
  const input = guessUl.querySelectorAll("input");
  const inputToArray = Array.from(input);
  const newInputArray = inputToArray.map(input => input.value);

  return newInputArray;
};

const checkNumberSeq = () => {
  // TODO: Lag logikken som sjekker om du har sortert riktig
  // Tips: Bruk getGuess() for å få "det som er gjettet"
  // Tips: Bruk .sort() .join()
  const guess = getGuess();
  if (numbers.sort().join(" ") === guess.join(" "))
    alert("The numbers are sorted correctly.");
  else 
    alert("That's wrong, try again!");
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input")

    li.appendChild(input);
    guessUl.appendChild(li);
  }
};

const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = numbers[i];

    numbersUl.appendChild(li);
  }
};

const createUI = () => {
  // TODO: Bygg hele UI ved hjelp av UI funksjonene
  addNumbersUI();
  addInputUI(); 
};

createUI();

// TODO: Lytt til 'click'-event og trigg validateNumberSeq ved klikk
button.addEventListener("click", checkNumberSeq);