import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
const App = () => {
  return (
    <>
    <Navbar/>
      {" "}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </>
  );
};

export default App;
