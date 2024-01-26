import React from "react"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FAQ from "./Components/FAQ";

function Landing() {
  return (
    <div>
      <Nav />
      <Home />

      <FAQ />

      
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App
