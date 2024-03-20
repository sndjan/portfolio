import HeaderCSS from "../modules/Header.module.css";

function Header() {
  return (
    <>
      <div className={HeaderCSS.box}>
        <div className={HeaderCSS.heart}>♥</div>
        <div className={HeaderCSS.title}>&lt;Jan Sander/&gt;</div>
        <div className={HeaderCSS.menu}>☰</div>
      </div>
    </>
  );
}

export default Header;
