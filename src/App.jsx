import './styles/global.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Skills } from './sections/Skills/Skills';
import { Contact } from './sections/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
