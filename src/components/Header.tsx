import HeaderCSS from "../modules/Header.module.css";

function Header() {
  return (
    <>
      <div className={HeaderCSS.outerbox}>
        <div className={HeaderCSS.box}>
          <div className={HeaderCSS.link}>01. About me</div>
        </div>
        <div className={HeaderCSS.box}>
          <div className={HeaderCSS.link}>02. Projects</div>
        </div>
        <div className={HeaderCSS.box}>
          <div className={HeaderCSS.link}>03. Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
