import Header from "./components/Header";
import About from "./components/About";
import ProjectOverview from "./components/ProjectOverview";
import Contact from "./components/Contact";
import AppCSS from "./modules/App.module.css";

function App() {
  return (
    <>
      <div className={AppCSS.background}></div>
      <script src="./scripts/background.js"></script>
      <Header />
      <About />
      <ProjectOverview />
      <Contact />
    </>
  );
}

export default App;
