import './App.css'
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Presentation from './components/Presentation'

function App() {

  return (
    <div className="App container">
      <Navbar />
      <main className='container flex flex-col items-center justify-center px-10'>
        <Presentation />
        <Services></Services>
      </main>
    </div>
  )
}

export default App
