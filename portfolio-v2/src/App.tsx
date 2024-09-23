import './styles.css';
import Card from './components/Card';
import HeaderPage from './components/HeaderPage';
import AddProjectForm from './components/AddProjectForm';
import OpenFormButton from './components/OpenFormButton';
import CardDisplayJsonData from './components/CardDisplayJsonData';

function App() {

  return (
     <>
        {/* Static images goes into public folder? */}
        <HeaderPage
          headerImage={{image: "assets/blue.png", 
            imageAltText: "pixelated-ish shades of blue in a cloud like pattern"}}
          title="Farming Arc"
        />

      <main>
        <OpenFormButton />
        <AddProjectForm />
        <CardDisplayJsonData />

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
