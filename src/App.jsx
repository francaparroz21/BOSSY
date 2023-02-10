import './App.css'
import Navbar from "./components/Navbar"
import {ServiceCarousel} from "./components/Services"
import Presentation from './components/Presentation'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App container">
      <Navbar />
      <main className='container flex flex-col items-center gap-10 my-20 sm:gap-20 md:px-20 '>
        <Presentation />
        <ServiceCarousel/>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
