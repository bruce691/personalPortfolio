import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

import { Element } from "react-scroll";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Bg from "./pages/Bg";
import Contact from "./pages/Contact";
import About from "./pages/About.jsx";
function App() {
  return (
    <>
      <Element name={"Home"} id="home">
        <Navbar />
        <Home />
      </Element>
      {/* <Aboutus /> */}
      <About />
      <Service />
      <Bg />
      <Project />
      <Contact />
    </>
  );
}

export default App;
