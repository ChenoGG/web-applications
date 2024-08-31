// Oppgave 1
const button1 = document.getElementById("remove-btn");
const element1 = document.getElementById("remove");

button1.addEventListener("click", (params) => {
    element1.remove();
})

// Oppgave 2
const button2 = document.getElementById("change-btn");
const element2 = document.getElementById("change");
const lifeStory = "Ah, Thorfinn. Perhaps farming is the answer."

button2.addEventListener("click", (params) => {
    element2.innerHTML = lifeStory;
})

// Oppgave 3
const paragraphText = document.getElementById("input-text")
const userInput = document.getElementById("input");

userInput.addEventListener("input", (params) => {
    paragraphText.textContent = input.value;
})

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const button3 = document.getElementById("write-list");
const writtenList = document.getElementById("ul");

button3.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        let li = document.createElement("li");
        li.textContent = myList[i];
        writtenList.appendChild(li);
    }
})

// Oppgave 5
const button4 = document.getElementById("create");
const dropdownMenu = document.getElementById("select");
const userInputText = document.getElementById("text");
const appendElement = document.getElementById("placeholder");

button4.addEventListener("click", () => {
    const newElement = document.createElement(dropdownMenu.value);
    newElement.textContent = userInputText.value;
    appendElement.appendChild(newElement);
})

// Oppgave 6
const button5 = document.getElementById("remove-li");
const removeList = document.getElementById("list");

button5.addEventListener("click", () => {
    removeList.removeChild(removeList.children[0])
})

// Oppgave 7
const button6 = document.getElementById("order");
const userInput2 = document.getElementById("name");

userInput2.addEventListener("input", () => {
    if (userInput2.value.length > 4) {
        button6.disabled = true;
        button6.style.border = "5px solid red";
    } else {
        button6.disabled = false;
        button6.style.border = "";
    }
})

// Oppgave 8
const button7 = document.getElementById("color");
const ul = document.querySelector(".children");
const li = ul.children;

button7.addEventListener("click", () => {
    for (let i = 0; i < li.length; i++) {
        if (i % 2 === 1) {
            li[i].style.border = "3px solid pink";
        } else {
            li[i].style.border = "3px solid green";
        }
    }
})