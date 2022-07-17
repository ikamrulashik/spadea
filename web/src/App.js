import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './routes/home';
import About from './routes/about';
import Services from './routes/services';
import Work from './routes/work';
import Contact from './routes/contact';
import Blog from './routes/blog';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
