import Quiz from "./quiz"
import Form from "./Form"
import Timer from "./Timer"
import UpToName from "./uptoname"

function Title(){
  return <h1>Bienvenu dans le jeu de Quiz</h1>
}

export default function App(prop) {
  return <div className="app-container">
    <UpToName />
  </div>

}