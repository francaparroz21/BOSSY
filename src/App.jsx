import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ProductsCarrusel } from './components/Products'
import Presentation from './components/Presentation'
import Faq from './components/FAQ'
import About from './components/About'
import Tips from './components/Tips'
import Courses from './components/Courses'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <div className='App w-full relative overflow-hidden'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Presentation />} />
          <Route exact path='/quien-soy' element={<About />} />
          <Route exact path='/servicios' element={<Services />} />
          <Route exact path='/servicios/:servicioId' element={<Services />} />
          <Route exact path='/productos' element={<ProductsCarrusel />} />
          <Route exact path='/capacitaciones' element={<Courses />} />
          <Route exact
            path='/capacitaciones/:capacitacionesId'
            element={<Courses />}
          />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/tips' element={<Tips />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
