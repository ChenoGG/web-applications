import { ImageProps } from "./types"

type AddProjectFormProps = {
    thumbnail: ImageProps
    name: string
    language: string[]
    description: string 
}

export default function AddProjectForm() {
    // use state
    
    return (
        <div id="project-form">
          <form id="form" method="POST">
            <label htmlFor="name">Project name:</label>
            <input type="text" id="name" name="name" />
            
            <p>Language:</p>
            <div className="lang-div">
              <input type="checkbox" id="langHTML" name="langHTML" value="HTML" />
              <label htmlFor="langHTML">HTML</label>
              <input type="checkbox" id="langCSS" name="langCSS" value="CSS" />
              <label htmlFor="langCSS">CSS</label>
              <input type="checkbox" id="langJS" name="langJS" value="JavaScript" />
              <label htmlFor="langJS">JavaScript</label>
              <input type="checkbox" id="langPY" name="langPY" value="Python" />
              <label htmlFor="langPY">Python</label>
            </div>

            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc"></textarea>

            <label htmlFor="thumbnail">Project Thumbnail:</label>
            <input type="file" id="thumbnail" name="thumbnail" />

            <input type="submit" value="Add project" />
            <button id="exit-button" type="button">Exit form</button>
          </form>
        </div>
    )
}