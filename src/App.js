import "./App.css";
import Footer from "./components/Footer";
import GitHub from "./components/Github";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Line from "./components/Line";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Line />
      <Info2 />
      <Skills />
      <Projects />
      <Stats />
      <GitHub />
      <Footer />
    </div>
  );
}

export default App;
