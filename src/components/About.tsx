import AboutCSS from "../modules/About.module.css";

function About() {
  return (
    <>
      <div className={AboutCSS.aboutBox}>
        <div className={AboutCSS.intro}>
          <div className={AboutCSS.hi}>Hi, my name is</div>
          <div className={AboutCSS.name}>Jan Sander</div>
        </div>
        <div className={AboutCSS.text}>
          Hello! My name is Jan and I study Medieninformatik at the Hochschule
          der Medien in Stuttgart.
        </div>
      </div>
    </>
  );
}

export default About;
