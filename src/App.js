import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;