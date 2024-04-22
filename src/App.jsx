import styles from "./App.module.css";
import { About } from "./components/Navbar/About/About";
import { Contact } from "./components/Navbar/Contact/Contact";
import { Experience } from "./components/Navbar/Experience/Experience";
import { Hero } from "./components/Navbar/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Navbar/Projects/Projects";
//import { Navbar } from "./components/navbar/Navbar";
//import Navbar from "./components/Navbar";

function App() {
  

  return (
     
       <div className={styles.App}>
        <Navbar/>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        </div>
     
  )
}

export default App
