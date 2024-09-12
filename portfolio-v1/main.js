import './style.css'

// Html form functionality
const createProjectButton = document.getElementById("create-button")
const exitProjectButton = document.getElementById("exit-button")
const formPopUp = document.getElementById("project-form")

createProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "block"
})

exitProjectButton.addEventListener("click", () => {
    formPopUp.style.display = "none"
})

const fetchData = async () => {
    const url = "/assets/data.json"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        console.log(json)

        const existingProjects = JSON.parse(localStorage.getItem("projects")) || []
        const allProjects = [...json, ...existingProjects]

        updateProject(allProjects)

    } catch (error) {
        console.error(error.message)
    }  
}

// courtesy of Marius Wallin thank you I have smooth brain
function updateProject(projectList) {
    const projectWrapper = document.getElementById("project-wrapper")

    // courtesy of ChatGPT, block scope is a thing I forgot
    let sectionHTML = ""

    for (const project of projectList) {
        sectionHTML += `
        <section class="project-card">
            <img src="${project.thumbnail}" alt="${project.thumbnailAlternative}">
            <h2>${project.name}</h2>
            <p>${project.language.join(", ")}</p>
            <p>${project.description}</p>
        </section>
        `
    }
    projectWrapper.insertAdjacentHTML("beforeend", sectionHTML)
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const projectThumbnail =  document.getElementById("thumbnail").value
    const projectName = document.getElementById("name").value
    const projectDescription = document.getElementById("desc").value

    // https://www.joshuacolvin.net/selected-checkbox-values/
    // fingers crossed 
    const projectLanguage = document.querySelectorAll("input[type='checkbox']:checked")
    const projectLanguageToArray = Array.from(projectLanguage).map(projectLanguage => projectLanguage.value)

    // Self note: thumbnail alternative for later
    // also need to fix thumbnail upload so its not undefined
    const newProject = {
        thumbnail: projectThumbnail,
        name: projectName,
        language: projectLanguageToArray,
        description: projectDescription,
    }

    updateProject([newProject]);

    document.getElementById("project-form").style.display = "none";

    saveProject(newProject);

    document.getElementById("form").reset()
})

const saveProject = (project) => {
    let projects = JSON.parse(localStorage.getItem("projects")) || []

    projects.push(project)
    localStorage.setItem("projects", JSON.stringify(projects))
}

const loadProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || []

    updateProject(projects);
}

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
    loadProject();
})
