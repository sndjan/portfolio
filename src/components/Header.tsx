import HeaderCSS from "../modules/Header.module.css";
import { useState } from "react";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div className={HeaderCSS.burgerMenu} onClick={toggleMenu}>
        <div className={HeaderCSS.bar}></div>
        <div className={HeaderCSS.bar}></div>
        <div className={HeaderCSS.bar}></div>
      </div>
      <div
        className={`${HeaderCSS.menuLinks} ${
          menuActive ? HeaderCSS.menuActive : ""
        }`}
      >
        <a href="#about" className={HeaderCSS.link}>
          About me
        </a>
        <a href="#projectOverview" className={HeaderCSS.link}>
          Projects
        </a>
        <a href="" className={HeaderCSS.link}>
          Contact
        </a>
      </div>
      <div className={HeaderCSS.outerbox}>
        <div className={HeaderCSS.box}>
          <a href="#about" className={HeaderCSS.link}>
            About me
          </a>
        </div>
        <div className={HeaderCSS.box}>
          <a href="#projectOverview" className={HeaderCSS.link}>
            Projects
          </a>
        </div>
        <div className={HeaderCSS.box}>
          <a href="" className={HeaderCSS.link}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
