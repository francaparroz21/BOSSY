import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <div className='App w-full relative overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/quien-soy' element={<About />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/servicios/:servicioId' element={<Services />} />
          <Route path='/productos' element={<ProductsCarrusel />} />
          <Route path='/capacitaciones' element={<Courses />} />
          <Route
            path='/capacitaciones/:capacitacionesId'
            element={<Courses />}
          />
          <Route path='/faq' element={<Faq />} />
          <Route path='/tips' element={<Tips />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
