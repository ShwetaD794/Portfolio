import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Rightpanel from "./components/Rightpanel";
import MouseTail from "./components/MouseTail";

function App() {
  return (
    <div className="container overflow-x-hidden w-full h-full">
      <Background />
      <Navbar />
      <Rightpanel />
      <MouseTail />
      <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
