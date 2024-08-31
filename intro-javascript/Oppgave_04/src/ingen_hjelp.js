//import './styles.css';

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const guess = document.getElementById("guess");
const numbers = document.getElementById("numbers");

// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector("button");

// TODO: Lag en liste med tallene som skal sorteres
const numbersToSort = [5, 9, 2, 4, 39]

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
function displayNumbersToSort() {
    let result = "";

    for (let i = 0; i < numbersToSort.length; i++) {
        result += numbersToSort[i] + " ";
        
    }
    console.log(result)
}

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i


// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk

displayNumbersToSort()

/*
<!DOCTYPE html>
<html>
<body>

<h1>The input element</h1>

<form action="/action_page.php">
  <label for="first">1st:</label>
    <input type="number" id="first" name="first" style="width: 40px">
  <label for="second">2nd:</label>
    <input type="number" id="second" name="second" style="width: 40px">
  <label for="third">3rd:</label>
    <input type="number" id="third" name="third" style="width: 40px">
  <label for="fourth">4th:</label>
    <input type="number" id="fourth" name="fourth" style="width: 40px">
  <label for="fifth">5th:</label>
    <input type="number" id="fifth" name="fifth" style="width: 40px">
  <br>
  <br>
  <input type="submit" value="Submit">
</form>

</body>
</html> */