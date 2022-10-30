import React, {useContext, useEffect} from "react";
import "./NavigationBar.styles.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TransitionContext } from "../../contexts/TransitionContext.component";


export const NavigationBar = () => {
  const {setHomeTransition} = useContext(TransitionContext)

  const navigateHome = () => {
    setHomeTransition(true)
  }

  useEffect(() => {
    setHomeTransition(false)
  }, [])
  return (
    // <div className={isHome ? "closed" : "NavigationBarContainer"}>
    <motion.div
      className={"NavigationBarContainer"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 4 }}
    >
      <Link to="/" className="NavigationBarTitle" onClick={navigateHome}>
        <h4>Rory Balducci</h4>
      </Link>
      <div className="HamburgerContainer">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </motion.div>
  );
};
