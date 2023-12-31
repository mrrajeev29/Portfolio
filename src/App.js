import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/projects";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
