import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import LogoShowcase from "./components/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
