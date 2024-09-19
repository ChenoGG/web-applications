import './index.css'
import Student from "./components/Student";
import Grid from './components/Grid';

const students = [
  {id: "123", name: "Peter"},
  {id: "234", name: "Wolfgang"},
  {id: "345", name: "Batman"},
  {id: "456", name: "Abraham"},
]

function App() {
  return (
    <main>
      {/* <Student id="123" name="Peter"/> */}
      <Grid students={students}/>
    </main>
  )
}

export default App;