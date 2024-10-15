import './styles.css';
import ProjectForm from './components/ProjectForm';
import DisplayProject from './components/DisplayProject';
import { useState } from 'react';
import { ProjectProps } from './components/types';
import DisplayProjectStats from './components/DisplayProjectStats';
import Layout from './components/Layout';

function App() {
    const [projects, setProjects] = useState<ProjectProps[]>([])

    return (
      <>
          <Layout>
            <ProjectForm
            setProjects={setProjects}
            />
            <DisplayProject 
            projects={projects} 
            setProjects={setProjects} 
            />
            <DisplayProjectStats
            projects={projects}
            total={projects.length}
            />
          </Layout>
      </>
  );
}

export default App;
