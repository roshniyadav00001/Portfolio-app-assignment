
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './Components/Index';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

const App = () => {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
