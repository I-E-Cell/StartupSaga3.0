import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FAQ from "./Components/FAQ";
import { About } from "./Components/About";
import Footer from "./Components/Footer";

import Events from "./Components/Events";
import Eventpn from "./Components/Eventpn";

function Landing() {
  const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

  return (
    <div>
      <Nav />

      <Home />
      <div className="">
        <About />

        <Events />
        <Eventpn />
        <FAQ />
        <Footer />
      </div>
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
