import './style.css'

// Create project + html form functions
const createProjectButton = document.getElementById("create-button")
const exitProjectButton = document.getElementById("exit-button")
const formPopUp = document.getElementById("project-form")

createProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "block"
})

exitProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "none"
})

