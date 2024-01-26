import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SponsorUS from "./Components/SponsorUS";
import "./assets/fonts/texas.otf";
import Sponsers from "./Components/Sponsers";

function Landing() {
  return (
    <div className="font-bodyFont">
      <Nav />
      <Home />
      <div className=" h-[100vh]"></div>
      <Sponsers />
      <div className=" h-[5vh]"></div>
      <SponsorUS />
      <div className=" h-[100vh]"></div>
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

export default App;
