import './styles.css';
import HeaderPage from './components/Header';
import ProjectForm from './components/ProjectForm';
import DisplayProject from './components/DisplayProject';
import { useState } from 'react';
import { ProjectProps } from './components/types';
import { FormProps } from './components/types';
import Nav from './components/Nav';

function App() {
  const [projects, setProjects] = useState<ProjectProps[]>([])

  const addProject = (project: FormProps) => {
    const newProject: ProjectProps = {
      name: project.name,
      language: project.language,
      description: project.desc,
      thumbnail: {
        image: project.thumbnail,
        imageAltText: "",
      }
    }

    setProjects((prev) => [...prev, newProject])
  }

  const removeProject = (name: string) => {
    if (confirm("Are you sure you want to deleted this project?") === true) {
      setProjects((prev) => prev.filter((project) => project.name !== name));
    }

    
  };

  return (
     <>
        {/* Static images goes into public folder? */}
      <header>
        <HeaderPage
          headerImage={{image: "assets/blue.png", 
            imageAltText: "pixelated-ish shades of blue in a cloud like pattern"}}
          title="Farming Arc"
        />
        <Nav />
      </header>


      <main>
        <ProjectForm onAddProject={addProject}/>
        <DisplayProject 
        projects={projects} 
        setProjects={setProjects} 
        total={projects.length}
        addProject={addProject}
        removeProject={removeProject}
        />
        {/*
        Old component where it read from the json file instead of using useEffect to grab data from hono, can prob be deleted.
        <CardDisplayJsonData />
         */}

        {/* <Card 
          thumbnail={{image:"assets/farmland.jpg", imageAltText:"This is alt text"}}
          name="Project Zeus"
          language={["JavaScript", "React", "HTML"]}
          description="The bad news is, it doesn't work. But perhaps we shouldn't be in the credit business at all."
        /> */}

      </main>
    </>
  );
}

export default App;
