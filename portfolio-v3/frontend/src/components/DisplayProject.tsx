import { ofetch } from "ofetch";
import { useEffect } from "react";
import { ProjectProps } from "./types";
import Card from "./Card";

// Courtesy of ChatGPT for moving projects/setProject up a layer and getting it to work - 
// gets very confusing the more there is
type DisplayProjectProps = {
  projects: ProjectProps[]
  setProjects: (projects: ProjectProps[]) => void
}

export default function DisplayProject(props: DisplayProjectProps) {
    const { projects, setProjects } = props

    // Fetches JSON projects
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
    
    // look at Clean up etc. later - https://ulearn.no/courses/webapp-2024-react-server/09-useffect-del-2
    useEffect(() => {
      initializeData();
    }, []);

    // Removes a project. Moved from App.tsx.
    const removeProject = (name: string) => {
      if (confirm("Are you sure you want to delete this project?")) {
        const updateProjects = projects.filter((project) => project.name !== name)
        
        setProjects(updateProjects)
      }
    };


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
        </>
    )
}