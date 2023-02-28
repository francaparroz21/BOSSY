import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductCarousel } from "./components/Products";
import Presentation from "./components/Presentation";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Tips from "./components/Tips";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App container ">
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Presentation/>}/>
          <Route path="/quien-soy" element={<About/>}/>
          <Route path="/servicios" element={<Services/>}/>
          <Route path="/servicios/:servicioId" element={<Services/>}/>
          <Route path="/productos" element={<ProductCarousel/>}/>
          <Route path="/capacitaciones" element={<Courses/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/tips" element={<Tips/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
