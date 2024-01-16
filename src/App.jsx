import './App.css'
import MiApi from './assets/components/MiApi'

function App() {


  return (
    <div>
      <h1>Clima en Chile <i className="fa-regular fa-sun logo"></i></h1>
      <p>Revisa el estado del clima en Chile cada una hora.</p>
      <MiApi/>
    </div>
  )
}

export default App
