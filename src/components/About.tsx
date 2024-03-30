import AboutCSS from "../modules/About.module.css";

function About() {
  return (
    <>
      <div id="about" className={AboutCSS.aboutBox}>
        <div className={AboutCSS.intro}>
          <div className={AboutCSS.hi}>Hi, ich bin</div>
          <div className={AboutCSS.name}>Jan Sander</div>
        </div>
        <div className={AboutCSS.text}>
          Hallo! Ich bin Jan Sander und ich studiere Medieninformatik an der
          Hochschule der Medien in Stuttgart-Vaihingen.
        </div>
      </div>
    </>
  );
}

export default About;