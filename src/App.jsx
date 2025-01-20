
//Importing Components 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Squad from './components/Squad';
import Footer from './components/Footer';
import NotFound from "./components/404"
//Importing Tools
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/Squad" element={<Squad />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
