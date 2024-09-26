import { useState, type FormEvent } from "react";
import { FormProps } from "./types";

type ProjectFormProps = {
  onAddProject: (project: FormProps) => void
}

// single state object
// https://daily.dev/blog/form-on-react-best-practices#:~:text=1.-,Use%20a%20Single%20State%20Object,keeps%20things%20tidy%20and%20simple.
// to reuse to clean form
const initialFormData: FormProps = {
  name: "",
  language: [],
  desc: "",
  thumbnail: ""
}

export default function ProjectForm(props: ProjectFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState<FormProps>(initialFormData)

    const { onAddProject } = props

    const openForm = () => {
        setShowForm(!showForm)
        setFormData(initialFormData)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formData.name) return;
        onAddProject(formData)
        setShowForm(false)
        setFormData(initialFormData)
    }

    // ChatGPT for this n checkboxes. Maybe I should not have used checkboxes
    // Actually worse than typescript, can't fathom why it would
    // be this hard to get data from some checkboxes in comparison to plain JS 
    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => {
                const languages = checked 
                    ? [...prev.language, value] 
                    : prev.language.filter(lang => lang !== value); 
                
                return { ...prev, language: languages }; 
            });
        } else {
            setFormData({
                ...formData,
                [name]: value 
            });
        }
    };
    
    // to show/hide form -> https://stackoverflow.com/questions/62240691/how-to-show-form-after-onclick-event-react
    return (
      <>
        <button id="create-button" type="button" onClick={openForm}>New project</button>

        {showForm && (
        <div id="project-form">
          <form id="form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Project name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />
            
            <p>Language:</p>
            <div className="lang-div">
              <input type="checkbox" id="langHTML" name="langHTML" value="HTML" checked={formData.language.includes("HTML")} onChange={handleFormChange} />
              <label htmlFor="langHTML">HTML</label>
              <input type="checkbox" id="langCSS" name="langCSS" value="CSS" checked={formData.language.includes("CSS")} onChange={handleFormChange} />
              <label htmlFor="langCSS">CSS</label>
              <input type="checkbox" id="langJS" name="langJS" value="JavaScript" checked={formData.language.includes("JavaScript")} onChange={handleFormChange} />
              <label htmlFor="langJS">JavaScript</label>
              <input type="checkbox" id="langPY" name="langPY" value="Python" checked={formData.language.includes("Python")} onChange={handleFormChange} />
              <label htmlFor="langPY">Python</label>
            </div>

            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" value={formData.desc} onChange={handleFormChange}></textarea>

            <label htmlFor="thumbnail">Project Thumbnail:</label>
            <input type="file" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleFormChange} />

            <input type="submit" value="Add project" />
            <button id="exit-button" type="button" onClick={openForm}>Exit form</button>
          </form>
        </div>
        )}
      </>
    )
}