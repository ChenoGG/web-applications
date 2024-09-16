import './styles.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  return (
     <>
      <header>
        {/* Static images goes into public folder? */}
        <img id="main-header-image" src="./assets/blue.png" alt="pixelated-ish shades of blue in a cloud like pattern" />
        <div id="main-header-text">
          <h1>Farming Arc</h1>
          <p>
            Did you know that farming transcends the mere thought of survival?
            It is a metaphor for life, growth, and the pursuit of peace For the Glory of Mankind. 
            To return to simplicity, to the being itself. 
            It is not only cultivating the land, but the soul.
            Each seed planted with the hopes of freeing the world from the scars of war.
            Each harvest a testament to the unending resilience and hope.  
          </p>
          <p>
            A true warrior is not found in the sword, but the iridium hoe.
          </p>
        </div>
      </header>

      <main>
        <button id="create-button" type="button">New project</button>

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

        <div id="project-wrapper"></div>
        <div id="project-wrapper-testing"></div> 
      </main>

      <div>
        <Title title="This is a test"/>
        <Paragraph paragraph="Did you know that farming transcends the mere thought of survival? It is a metaphor for life, growth, and the pursuit of peace For the Glory of Mankind. To return to simplicity, to the being itself. It is not only cultivating the land, but the soul. Each seed planted with the hopes of freeing the world from the scars of war. Each harvest a testament to the unending resilience and hope."/>
      </div>
    </>
  );
}

export default App;
