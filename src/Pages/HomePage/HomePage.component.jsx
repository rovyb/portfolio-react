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
    <div className={isMobile? "MobileHomePageContainer" : "HomePageContainer"}>
      <Header isMobile={isMobile} />
      <PaddingWrapper>
        <div className="LandingContainer">
          <div className="TitleContainer">
            <h4 className="LandingTitle">Welcome</h4>
            <p className="LandingText">
              I'm Rory, a frontend engineer currently working for American
              Express. I'm passionate about creating a consistent and fun user
              interface.
            </p>
            <p className="LandingText">
              Most of my experience is in React or React Native, howeverI have experience writing Swift (Watch, App), ML python scripts and model building. Whatever is
              needed for what i'm inspired to build is what I will learn. This website is designed in
              React, using scss and React Three Fiber.
            </p>
            <p className="LandingText">
              A little about me - i'm a yogi at heart, love to scuba dive, and
              my dream is to open a bakery one day. For now, i'll stick to
              writing quality, clean code.
            </p>
          </div>
          <div className="LandingImageContainer">
            <img src={yogoImage} className="LandingImage" />
            <img src={reactImage} className="LandingImage" />
            <img src={scubaImage} className="LandingImage" />
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
};
