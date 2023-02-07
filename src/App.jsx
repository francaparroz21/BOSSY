import './App.css'
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Presentation from './components/Presentation'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App container">
      <Navbar />
      <main className='container flex flex-col items-center gap-10 sm:gap-28 px-20 my-20'>
        <Presentation />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
