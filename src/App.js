import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skill from "./components/skill";
import Works from "./components/works";
import Contact from "./components/contact";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default App;