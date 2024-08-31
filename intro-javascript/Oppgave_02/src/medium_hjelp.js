import './styles.css';
import { users } from './util';

// TODO: Hent HTML #id med getElementById
const searchInput = '';
const filterInput = '';
const filterButton = '';
const userUl = '';

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  // TODO: bruk for-of eller vanlig for-løkke og tempelate literals `` til å skrive ut listen med brukere
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = '';
  if (searchName) {
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = '';
    if (searchResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = '';
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = '';
    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
