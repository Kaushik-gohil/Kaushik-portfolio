import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
