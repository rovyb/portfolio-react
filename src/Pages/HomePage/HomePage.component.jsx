import "./HomePage.styles.scss";
import { Header } from "../../components/Header/Header.component";
import { PaddingWrapper } from "../../utils/PaddingWrapper.component";
import { useIsMobile } from "../../utils/useIsMobile";
import yogoImage from "../../assets/yoga.svg";
import scubaImage from "../../assets/scuba.svg";
import reactImage from "../../assets/react.svg";
export const HomePage = ({ isHome }) => {
  const isMobile = useIsMobile();
  return (
    <div className="HomePageContainer">
      <Header isMobile={isMobile} />
      <PaddingWrapper>
        <div className="LandingContainer">
          <div className="TitleContainer">
            <h3 className="LandingTitle">Welcome</h3>
            <p className="LandingText">
              I'm Rory, a frontend engineer currently working for American
              Express. I'm passionate about creating a consistent and fun user
              interface.
            </p>
            <p className="LandingText">
              I have 5 years of experience using React and 2 years using React
              Native. I've also used Swift, wrote Python scripts for ML
              training, and more! This website is designed in React, using scss
              and React Three Fiber.
            </p>
            <p className="LandingText">
              A little about me - i'm a yogi at heart, love to scuba dive, and
              my dream is to open a bakery one day. For now, i'll stick to
              writing quality, clean code.
            </p>
          </div>
          <div className="LandingImageContainer">
            <img src={yogoImage} className="LandingImage" alt="Interest 1" />
            <img src={reactImage} className="LandingImage" alt="Interest 2" />
            <img src={scubaImage} className="LandingImage" alt="Interest 3" />
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
};
