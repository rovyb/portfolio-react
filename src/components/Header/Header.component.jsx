import "../Header/Header.styles.scss";
import linkedinImage from "../../assets/linkedin-svgrepo-com.svg";
import githubImage from "../../assets/github-svgrepo-com.svg";

export const Header = () => {
  return (
    <header className="HeaderContainer">
      <div>
        <h3 className="HeaderName">Rory Balducci</h3>
        <p className="HeaderName">Frontend Engineer</p>
      </div>
      <div className="HeaderLinksContainer">
        <a
          href="https://www.linkedin.com/in/rory-balducci-033a5b172/"
          target="_blank"
          rel="noreferrer"
          className="headerLink"
        >
          <img src={linkedinImage} className="headerLogo" alt="LinkedIn Link" />
        </a>
        <a
          className="headerLink"
          href="https://github.com/rovyb"
          rel="noreferrer"
          target="_blank"
        >
          <img src={githubImage} className="headerLogo" alt="GitHub Link" />
        </a>
      </div>
    </header>
  );
};
