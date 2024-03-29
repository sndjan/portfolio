import ContactCSS from "../modules/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <h1 className={ContactCSS.headline}>Contact</h1>
      <div className={ContactCSS.box}>
        <a
          href="https://github.com/sndjan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://gitlab.mi.hdm-stuttgart.de/js485"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGitlab} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/sndjan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://infinitario.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faItchIo} />
        </a>
      </div>
    </>
  );
}

export default Contact;
