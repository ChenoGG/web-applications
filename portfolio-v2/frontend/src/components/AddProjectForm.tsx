import { ImageProps } from "./types";
import { useState, type FormEvent } from "react";

type AddProjectFormProps = {
    thumbnail: ImageProps
    name: string
    language: string[]
    description: string 
}

export default function AddProjectForm() {
    // check types 
    const [projects, setProject] = useState([])
    // single state object
    // https://daily.dev/blog/form-on-react-best-practices#:~:text=1.-,Use%20a%20Single%20State%20Object,keeps%20things%20tidy%20and%20simple.
    const [formData, setFormData] = useState({
        name: "",
        langHTML: "",
        langCSS: "",
        langJS: "",
        langPY: "",
        desc: "",
        thumbnail: ""
    })

    const addProject = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const handleFormChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    
    {/* remember onChange */}
    return (
        <div id="project-form">
          <form id="form" method="POST" onSubmit={addProject}>
            <label htmlFor="name">Project name:</label>
            <input type="text" id="name" name="name" value={formData.name} />
            
            <p>Language:</p>
            <div className="lang-div">
              <input type="checkbox" id="langHTML" name="langHTML" value={formData.langHTML} /> {/* value="HTML" */}
              <label htmlFor="langHTML">HTML</label>
              <input type="checkbox" id="langCSS" name="langCSS" value={formData.langCSS} />
              <label htmlFor="langCSS">CSS</label>
              <input type="checkbox" id="langJS" name="langJS" value={formData.langJS} />
              <label htmlFor="langJS">JavaScript</label>
              <input type="checkbox" id="langPY" name="langPY" value={formData.langPY} />
              <label htmlFor="langPY">Python</label>
            </div>

            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" value={formData.desc} ></textarea>

            <label htmlFor="thumbnail">Project Thumbnail:</label>
            <input type="file" id="thumbnail" name="thumbnail" value={formData.thumbnail} />

            <input type="submit" value="Add project" />
            <button id="exit-button" type="button">Exit form</button>
          </form>
        </div>
    )
}