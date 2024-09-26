import { ofetch } from "ofetch";
import { useEffect } from "react";
import { ProjectProps } from "./types";
import Card from "./Card";

// Courtesy of ChatGPT for moving projects/setProject up a layer and getting it to work - 
// gets very confusing the more there is
type DisplayProjectProps = {
  projects: ProjectProps[]
  setProjects: (projects: ProjectProps[]) => void
  total: number
  removeProject: (name: string) => void
}

export default function DisplayProject(props: DisplayProjectProps) {
    const { projects, setProjects, total, removeProject } = props

    const initializeData = () => {
      console.log("fetching data");
      ofetch("http://localhost:3000/projects") 
        .then((projects: ProjectProps[]) => {
          console.log("data fetched")
          setProjects(projects)
          console.log("data initialized")
        })
        .catch((error) => {
          console.error("data rejected", error)
        });
    };
    
    useEffect(() => {
      initializeData();
    }, []);

    // for 1.6 (and 1.3? although this just hides it then..) incase no project in list
    if (total === 0) return null 

    return (
        <>
        <div className="project-card-container">
          {projects.map((data) => (
              <Card
                  key={data.name} 
                  thumbnail={data.thumbnail} 
                  name={data.name}
                  language={data.language}
                  description={data.description}
                  removeProject={() => removeProject(data.name)}
              />
          ))}
        </div>

        {/* https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples */}
        {/* Using filter to get X amount of times a language is used in projects */}
        <h3>Total projects: {total}</h3>
        <p>HTML - {projects.filter(project => project.language.includes("HTML")).length}</p>
        <p>CSS - {projects.filter(project => project.language.includes("CSS")).length}</p>
        <p>JavaScript - {projects.filter(project => project.language.includes("JavaScript")).length}</p>
        <p>Python - {projects.filter(project => project.language.includes("Python")).length}</p>
        <p>C# - {projects.filter(project => project.language.includes("C#")).length}</p>
        </>
    )
}