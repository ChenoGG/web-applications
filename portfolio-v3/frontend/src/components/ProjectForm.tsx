import { useState, type FormEvent } from "react";
import { FormProps, ProjectProps } from "./types";

type ProjectFormProps = {
  setProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>> // ChatGPT, not sure what this does exactly but it fixes the typescript error I had
}

// single state object
// https://daily.dev/blog/form-on-react-best-practices#:~:text=1.-,Use%20a%20Single%20State%20Object,keeps%20things%20tidy%20and%20simple.
// to reuse to clean form
const initialFormData: FormProps = {
  name: "",
  language: [],
  desc: "",
  thumbnail: "",
  // need date or site crash, so set it to current date
  // https://stackoverflow.com/questions/47066555/remove-time-after-converting-date-toisostring 
  publishedAt: new Date().toISOString().split('T')[0], 
  isPublic: true,
  status: "",
  externalLinks: [],
  tags: [],
}

export default function ProjectForm(props: ProjectFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState<FormProps>(initialFormData)

    const { setProjects } = props

    const addProject = (project: FormProps) => {
    const newProject: ProjectProps = {
      name: project.name,
      language: project.language,
      description: project.desc,
      thumbnail: {
        image: project.thumbnail,
        imageAltText: "",
      },
      publishedAt: new Date(project.publishedAt),
      isPublic: project.isPublic,
      status: project.status,
      externalLinks: project.externalLinks,
      tags: project.tags,
    }

    setProjects((prev) => [...prev, newProject])
  }

    const openForm = () => {
        setShowForm(!showForm)
        setFormData(initialFormData)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formData.name) return;
        addProject(formData)
        setShowForm(false)
        setFormData(initialFormData)
    }

    // ChatGPT for this n checkboxes. Maybe I should not have used checkboxes
    // Actually worse than typescript, can't fathom why it would
    // be this hard to get data from some checkboxes in comparison to plain JS 
    const handleFormChange = (e) => {
      const { name, value, checked } = e.target;
    
      if (name.startsWith("lang")) {
        setFormData((prev) => {
          const languages = checked
            ? [...prev.language, value]
            : prev.language.filter((lang) => lang !== value);
    
          return { ...prev, language: languages };
        });
        return
      } 
      
      if (name.startsWith("tag")) {
        setFormData((prev) => {
          const tags = checked
            ? [...prev.tags, value]
            : prev.tags.filter((tag) => tag !== value);
    
          return { ...prev, tags };
        });
        return
      } 
      
      // TODO: NOT sure if this works or not. -> For newly added projects to be hidden/public when using the form.
      // Update: Public/hidden works when using isPublic from json file with cookies,
      //         but when adding a new project through the web-form something is not working as intended
      if (name === "isPublic") {
        const isPublic = value === "true"
        setFormData((prev) => ({
          ...prev, 
          isPublic: isPublic
        }))
        console.log("Form Data:", formData);
        return

      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };


    // Didn't quite work, scrapped for now. (adding extra external links to project)
/*  const handleExtraAddLink = () => {}
    const handleExtraAddLinkChange = () => {} */
    
    // to show/hide form -> https://stackoverflow.com/questions/62240691/how-to-show-form-after-onclick-event-react
    return (
      <>
        <button id="create-button" type="button" onClick={openForm}>New project</button>

        {showForm && (
        <div id="project-form">
          <form id="form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Project name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />
            
      
            <fieldset className="lang-div">
              <legend>Language:</legend>
              <input type="checkbox" id="langHTML" name="langHTML" value="HTML" checked={formData.language.includes("HTML")} onChange={handleFormChange} />
              <label htmlFor="langHTML">HTML</label>
              <input type="checkbox" id="langCSS" name="langCSS" value="CSS" checked={formData.language.includes("CSS")} onChange={handleFormChange} />
              <label htmlFor="langCSS">CSS</label>
              <input type="checkbox" id="langJS" name="langJS" value="JavaScript" checked={formData.language.includes("JavaScript")} onChange={handleFormChange} />
              <label htmlFor="langJS">JavaScript</label>
              <input type="checkbox" id="langPY" name="langPY" value="Python" checked={formData.language.includes("Python")} onChange={handleFormChange} />
              <label htmlFor="langPY">Python</label>
            </fieldset>

            <fieldset className="lang-div">
              <legend>Tags:</legend>
              <input type="checkbox" id="tagFrontend" name="tagFrontend" value="Frontend" checked={formData.tags.includes("Frontend")} onChange={handleFormChange} />
              <label htmlFor="frontend">Frontend</label>
              <input type="checkbox" id="tagBackend" name="tagBackend" value="Backend" checked={formData.tags.includes("Backend")} onChange={handleFormChange} />
              <label htmlFor="backend">Backend</label>
              <input type="checkbox" id="TagFullstack" name="tagFullstack" value="Fullstack" checked={formData.tags.includes("Fullstack")} onChange={handleFormChange} />
              <label htmlFor="fullstack">Fullstack</label>
            </fieldset>

            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" value={formData.desc} onChange={handleFormChange}></textarea>

            <label htmlFor="externalLinks">External links:</label>
            <input type="url" name="externalLinks" value={formData.externalLinks} onChange={handleFormChange} placeholder="https://example.com" />

            <label htmlFor="thumbnail">Project Thumbnail:</label>
            <input type="file" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleFormChange} />

            <label htmlFor="publishedAt">Publication Date:</label>
            <input type="date" name="publishedAt" value={formData.publishedAt} onChange={handleFormChange} />

            <label htmlFor="public">Public</label>
            <input type="radio" id="public" name="isPublic" value="true" checked={formData.isPublic === true} onChange={handleFormChange} />
            <label htmlFor="not-public">Not Public</label>
            <input type="radio" id="not-public" name="isPublic" value="false" checked={formData.isPublic === false} onChange={handleFormChange} />

            <input type="submit" value="Add project" />
            <button id="exit-button" type="button" onClick={openForm}>Exit form</button>
          </form>
        </div>
        )}
      </>
    )
}