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
import mixpanel from 'mixpanel-browser';
import Popup from "./Components/Popup.jsx";
mixpanel.init('92a875811535e823719809b9e6df97ea', {debug: true, track_pageview: true, persistence: 'localStorage'});




function Landing() {
  const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

  mixpanel.track('HomePage loaded');
  return (
    <div  className="overflow-x-clip">
      <Nav />

      <Home />
        <Popup />
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
