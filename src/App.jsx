import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import About from "./pages/About";
import Connect from "./pages/Connect";

const App = () => {
  return (
    <Router>
      <Navbar />

      <main className="overflow-x-hidden">

        <section id="home">
          <Home />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="connect">
          <Connect />
        </section>

      </main>

      <Footer />

      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;