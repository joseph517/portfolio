
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import ThemeToggle from './components/common/ThemeToggle';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ThemeToggle />
    </div>
  );
}

export default App;
