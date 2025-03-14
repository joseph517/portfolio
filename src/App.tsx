import "./App.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
