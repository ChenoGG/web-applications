import './styles.css';
import Card from './components/Card';
import HeaderPage from './components/HeaderPage';
import AddProjectForm from './components/AddProjectForm';
import OpenFormButton from './components/OpenFormButton';
import CardListAll from './components/CardListAll';

function App() {

  return (
     <>
        {/* Static images goes into public folder? */}
        {/* Look for other ways instead of mapping it later?
        I Just wanted two paragraphs without using props for each man. */}
        <HeaderPage
          headerImage={{image: "assets/blue.png", 
            imageAltText: "pixelated-ish shades of blue in a cloud like pattern"}}
          title="Farming Arc"
        />

      <main>
        <OpenFormButton />
        <AddProjectForm />
        <CardListAll />

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
