
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from "./components/About";
import Experience from './components/Experience';
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
      <Experience/>
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
