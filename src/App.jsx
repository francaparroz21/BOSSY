import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ServiceCarousel } from "./components/Services";
import Presentation from "./components/Presentation";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Tips from "./components/Tips";
import Courses from "./components/Courses"
import Products from "./components/Products"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Presentation/>}/>
          <Route path="/QuienSoy" element={<About/>}/>
          <Route path="/Servicios" element={<ServiceCarousel/>}/>
          <Route path="/Productos" element={<Products/>}/>
          <Route path="/Capacitaciones" element={<Courses/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/Tips" element={<Tips/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
