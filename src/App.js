import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '/Users/eiji/Desktop/personal-portfolio/src/components/NavBar';
import { Banner } from '/Users/eiji/Desktop/personal-portfolio/src/components/Banner';
import { Skills } from '/Users/eiji/Desktop/personal-portfolio/src/components/Skills';
import { Projects } from'/Users/eiji/Desktop/personal-portfolio/src/components/Projects';
import { Contact } from '/Users/eiji/Desktop/personal-portfolio/src/components/Contact';
import { Footer } from '/Users/eiji/Desktop/personal-portfolio/src/components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
