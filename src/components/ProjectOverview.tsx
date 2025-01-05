import Project from "./Project";
import ProjectOverviewCSS from "../modules/ProjectOverview.module.css";

function Projects() {
  return (
    <>
      <div id="projectOverview" className={ProjectOverviewCSS.headline}>
        Projekte
      </div>
      <div className={ProjectOverviewCSS.box}>
        <Project
          imgURL="./images/RewardRun.png"
          imgAlt="Website-Screenshot"
          link="http://rewardrun.mi.hdm-stuttgart.de/"
          tech="Nextjs, Typescript, Springboot, MongoDB"
          description="RewardRun ist eine Webanwendung, mit der Event-Besucher QR-Codes scannen können, um Belohnungen freizuschalten und ihre Fortschritte zu verfolgen, während Veranstalter eigene Events erstellen und Statistiken einsehen können. (in Entwicklung)"
        >
          RewardRun
        </Project>
        <Project
          imgURL="./images/Wuerfelkarte.png"
          imgAlt="Website-Screenshot"
          link="https://sndjan.github.io/wuerfelkarte/"
          tech="React, Typescript, HTML, CSS"
          description="Eine Tracker für Spiele wie Yatzee oder Kniffel, der automatisch die Ergebnisse ausrechnet. (2024)"
        >
          Würfelkarte
        </Project>
        <Project
          imgURL="./images/WhereIsBob.png"
          imgAlt="Website-Screenshot"
          link="https://sndjan.github.io/whereis/"
          tech="React, Typescript, HTML, CSS"
          description="Ein kleines Web-Spiel, bei dem man Bob finden muss. (2024)"
        >
          Where is Bob?
        </Project>
        <Project
          imgURL="./images/Portfolio.png"
          imgAlt="Website-Screenshot"
          link="https://github.com/sndjan/portfolio"
          tech="React, Typescript, HTML, CSS"
          description="Eine Webseite um Projekte von mir und Informationen über mich zu zeigen. (2024)"
        >
          Portfolio
        </Project>
        <Project
          imgURL="./images/SpeisenOase.png"
          imgAlt="Shop-Screenshot"
          link="https://gitlab.mi.hdm-stuttgart.de/js485/speisen-oase"
          tech="Java, JavaFX, JSON"
          description="Ein Mockup eines kleinen Online-Marktplatzes für Lebensmittel und verschiedene andere Dinge. Entstanden in einem Team als Abgabe in der Uni im WS23/24."
        >
          SpeisenOase
        </Project>
        <Project
          imgURL="./images/Glow.png"
          imgAlt="Game-Screenshot"
          link="https://infinitario.itch.io/glow"
          tech="Unity, C#, Photoshop"
          description="Ein kleiner Platformer, bei dem du das Licht zu deinem Vorteil nutzen musst. Entstanden bei einem Team Game-Jam im Jahr 2023"
        >
          Glow
        </Project>
        <Project
          imgURL="./images/BucketOfEarth.png"
          imgAlt="Game-Screenshot"
          link="https://infinitario.itch.io/bucket-of-earth"
          tech="Unity, C#, Aseprite"
          description="Ein lustiger kleiner Endlos-Runner, bei dem man die Ozeane so einfärben muss, dass sie zu den entgegenkommenden Farbeimern passen. Entstanden in einem Solo Game-Jam im Jahr 2019 "
        >
          Bucket of Earth
        </Project>
      </div>
    </>
  );
}

export default Projects;
