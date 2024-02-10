import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FAQ from "./Components/FAQ";
import { About } from "./Components/About";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel.jsx"
import Events from "./Components/Events";


import Eventpn from "./Components/Eventpn";
import Sponsors from "./Components/Sponsors";
import SponUS from "./Components/SponUS";
import Modal from "./Components/Modal.jsx";
import Cards from "./Components/Cards1.jsx";




function Landing() {
  const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

  return (
    <div  className="overflow-x-clip">
      <Nav />

      <Home />

        <About />
        <Modal />
        <Events />
        <Eventpn />
        <Sponsors />
        <SponUS />
        <Carousel/>
        <FAQ />
      
        <Footer />
      

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
