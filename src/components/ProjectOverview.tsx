import Project from "./Project";
import ProjectOverviewCSS from "../modules/ProjectOverview.module.css";

function Projects() {
  return (
    <>
      <div></div>
      <div className={ProjectOverviewCSS.headline}>Projects</div>
      <div className={ProjectOverviewCSS.box}>
        <Project
          imgURL="public/images/BucketOfEarth.png"
          imgAlt="Game-Screenshot"
          link="https://infinitario.itch.io/bucket-of-earth"
          tech="Unity, C#, Aseprite"
          description="A fun little endless runner, where you have to color the oceans to fit the oncoming paint buckets. Made in a game jam in 2019"
        >
          Bucket of Earth
        </Project>
        <Project
          imgURL="public/images/Portfolio.png"
          imgAlt="Website-Screenshot"
          link="https://github.com/sndjan/portfolio"
          tech="React, Typescript, HTML, CSS"
          description="Website to showcase my projects and general information about myself."
        >
          Portfolio
        </Project>
        <Project
          imgURL="public/images/Glow.png"
          imgAlt="Game-Screenshot"
          link="https://infinitario.itch.io/glow"
          tech="Unity, C#, Photoshop"
          description="A little platformer, where you have to use the light to your advantage. Made in a game jam in 2023"
        >
          Glow
        </Project>
        <Project
          imgURL="public/images/SpeisenOase.png"
          imgAlt="Shop-Screenshot"
          link="https://gitlab.mi.hdm-stuttgart.de/js485/speisen-oase"
          tech="Java, JavaFX, JSON"
          description="A mockup of a small online marketplace for groceries and various other essentials."
        >
          SpeisenOase
        </Project>
      </div>
    </>
  );
}

export default Projects;
