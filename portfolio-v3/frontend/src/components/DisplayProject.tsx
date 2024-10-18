import { ProjectProps } from "./types";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";
import { useEffect } from "react";

// Courtesy of ChatGPT for moving projects/setProject up a layer and getting it to work - 
// gets very confusing the more there is
type DisplayProjectProps = {
  projects: ProjectProps[]
  setProjects: (projects: ProjectProps[]) => void
}

export default function DisplayProject(props: DisplayProjectProps) {
    const { projects, setProjects } = props
    const { projects: fetchedProjects, loading, error } = useFetchData() // ChatGPT for projects: fetchedProjects i.e. renaming it

    // Might be scuffed idk
    useEffect(() => {
      setProjects(fetchedProjects)
    }, [fetchedProjects])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>;

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
                  publishedAt={data.publishedAt}
                  isPublic={data.isPublic}
                  status={data.status}
                  externalLinks={data.externalLinks}
                  tags={data.tags}
                  removeProject={() => removeProject(data.name)}
              />
          ))}
        </div>
        </>
    )
}