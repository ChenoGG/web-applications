import { ofetch } from "ofetch";
import { useEffect, useState } from "react";
import { ProjectProps } from "./types";
import Card from "./Card";

export default function DisplayProject() {
    const [projects, setProjects] = useState<ProjectProps[]>([])

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


    return (
        <div>
        {projects.map((data) => (
            <Card
                key={data.name} 
                thumbnail={data.thumbnail} 
                name={data.name}
                language={data.language}
                description={data.description}
            />
        ))}
        </div>
    )
}