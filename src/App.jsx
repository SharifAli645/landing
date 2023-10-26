import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Feature from './components/Feature';
import Intro from './components/Intro';
import "./App.css"

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
      </Router>
    </div>
  );
}
