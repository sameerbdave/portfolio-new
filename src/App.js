import './App.css';
import Nav from './components/Nav';
import Home from './components/HomePage';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Tab from './components/tabs';
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
     <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Tab/>
    </BrowserRouter>
  );
}

export default App;
