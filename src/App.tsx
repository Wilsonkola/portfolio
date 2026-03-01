import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Volunteer />
      <Footer />
    </div>
  );
}
