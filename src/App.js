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
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
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
