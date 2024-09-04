import './style.css'

// Html form functions
const createProjectButton = document.getElementById("create-button")
const exitProjectButton = document.getElementById("exit-button")
const formPopUp = document.getElementById("project-form")

createProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "block"
})

exitProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "none"
})

// Self reminder: did I need to reuse this somewhere? 
/*
const createHTMLProjectTemplate = (project) => {
    return `
    <section class="project-card">
        <img src="${project.thumbnail}" alt="${project.thumbnailAlternative}">
        <h2>${project.name}</h2>
        <p>${project.language}</p>
        <p>${project.description}</p>
    </section>
    `
}
*/ 

//JSON basic fetch function
// Is this exercise 7? I assume that is correct right, 
//and then DOMContentLoaded below would be second half of 10?
const fetchData = async () => {
    const url = "/assets/data.json"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error(error.message)
    }  
}

fetchData();

// Fetches the json data, calls updateProject which dynamically creates html to display the data
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3999/json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            updateProject(data)
        })
})

// courtesy of Marius thank you I have smooth brain
function updateProject(projectList) {
    const projectWrapper = document.getElementById("project-wrapper")

    projectWrapper.innerHTML = ""
    // courtesy of ChatGPT, block scope is a thing I forgot
    let sectionHTML = ""

    for (const project of projectList) {
        sectionHTML += `
        <section class="project-card">
            <img src="${project.thumbnail}" alt="${project.thumbnailAlternative}">
            <h2>${project.name}</h2>
            <p>${project.language}</p>
            <p>${project.description}</p>
        </section>
        `
    }
    projectWrapper.insertAdjacentHTML("beforeend", sectionHTML)
}

// Create new project from html form
// change: create-button < add-project-button ? 
document.getElementById("form").addEventListener("submit", function() {
    event.preventDefault()
    
    const projectThumbnail =  document.getElementById("thumbnail").value
    const projectName = document.getElementById("name").value
    const projectDescription = document.getElementById("desc").value

    // https://www.joshuacolvin.net/selected-checkbox-values/
    // fingers crossed 
    const projectLanguage = document.querySelectorAll("input[type='checkbox']:checked")
    const projectLanguageToArray = Array.from(projectLanguage).map(projectLanguage => projectLanguage.value)

    // Self reminder: is it possible to reuse wrapper? don't seem to work.
    const projectWrapperTesting = document.getElementById("project-wrapper-testing")
    projectWrapperTesting.innerHTML = ""

    // NB. user can't add alt text, look into this later
    const newProjectSectionHTML = `
    <section class="project-card">
        <img src="${projectThumbnail}">
        <h2>${projectName}</h2>
        <p>${projectLanguageToArray}</p>
        <p>${projectDescription}</p>
    </section>
    `
    console.log(newProjectSectionHTML);
    projectWrapperTesting.insertAdjacentHTML("beforeend", newProjectSectionHTML)

    document.getElementById('project-form').style.display = 'none';

    saveProject();
})

// LocalStorage save
const saveProject = () => {
    let projects = []

    const projectElements = document.querySelectorAll(".project-card")

    for (const element of projectElements) {
        projects.push(element.textContent)
    }

    localStorage.setItem("projects", JSON.stringify(projects))
}

const loadProject = () => {
    let projects = JSON.parse(window.localStorage.getItem("projects")) || []
    console.log(projects)

    let html;

    for (const project of projects)
        html = `
        <section class="project-card">
            <img src="${projectThumbnail}">
            <h2>${projectName}</h2>
            <p>${projectLanguageToArray}</p>
            <p>${projectDescription}</p>
        </section>
    `
}

document.getElementById("create-button").addEventListener("click", saveProject);
document.addEventListener("DOMContentLoaded", loadProject)

loadProject();