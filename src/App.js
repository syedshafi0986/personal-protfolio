import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeroPage from './components/HeroPage';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/Projects';
import Footer from './components/footer';
import Contact from './components/contact';
function App() {
  return (
    <>
      <NavBar/>
      <HeroPage/>
    <div className='body-container'>
      {/* <img src={myself} alt="" /> */}
      <About/>
      <Education/>
      
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
      <Footer/>
    </>
  );
}

export default App;
