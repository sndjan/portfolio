import AboutCSS from "../modules/About.module.css";

function About() {
  return (
    <>
      <div className={AboutCSS.aboutBox}>
        <div className={AboutCSS.intro}>
          <div className={AboutCSS.hi}>Hi, mein Name ist</div>
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
