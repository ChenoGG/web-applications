import './styles.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
import Card from './components/Card';
import HeaderPage from './components/HeaderPage';
import AddProjectForm from './components/AddProjectForm';
import OpenFormButton from './components/OpenFormButton';

function App() {
  return (
     <>
        {/* Static images goes into public folder? */}
        {/* Look for other ways instead of mapping it later.
        I Just wanted two paragraphs man without two props. */}
        <HeaderPage
          headerImage={{image: "assets/blue.png", 
            imageAltText: "pixelated-ish shades of blue in a cloud like pattern"}}
          title="Farming Arc"
          paragraph={[`Did you know that farming transcends the mere thought of survival?
            It is a metaphor for life, growth, and the pursuit of peace For the Glory of Mankind. 
            To return to simplicity, to the being itself. 
            It is not only cultivating the land, but the soul.
            Each seed planted with the hopes of freeing the world from the scars of war.
            Each harvest a testament to the unending resilience and hope.`, 
            "A true warrior is not found in the sword, but the iridium hoe."]}
        />

      <main>
        <OpenFormButton />

        <AddProjectForm />

        <div id="project-wrapper"></div>
        <div id="project-wrapper-testing"></div> 

        <Card 
          thumbnail={{image:"assets/farmland.jpg", imageAltText:"This is alt text"}}
          name="Project Zeus"
          language={["JavaScript", "React", "HTML"]}
          description="The bad news is, it doesn't work. The good news is, maybe we shouldn't even be in sales!"
        />

        <Card 
          thumbnail={{image:"assets/farmland.jpg", imageAltText:"This is alt text"}}
          name="Project Zeus"
          language={["JavaScript", "React", "HTML"]}
          description="The bad news is, it doesn't work. The good news is, maybe we shouldn't even be in sales!"
        />

        <Card 
          thumbnail={{image:"assets/farmland.jpg", imageAltText:"This is alt text"}}
          name="Project Zeus"
          language={["JavaScript", "React", "HTML"]}
          description="The bad news is, it doesn't work. The good news is, maybe we shouldn't even be in sales!"
        />

        <Card 
          thumbnail={{image:"assets/farmland.jpg", imageAltText:"This is alt text"}}
          name="Project Zeus"
          language={["JavaScript", "React", "HTML"]}
          description="The bad news is, it doesn't work. The good news is, maybe we shouldn't even be in sales!"
        />

      </main>
    </>
  );
}

export default App;
