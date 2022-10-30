import React, {useState} from "react";
import "./DirectoryPage.styles.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const DirectoryPage = () => {
  const [animatedLink, setAnimatedLink] = useState();

  const animateLink = (e) => {
    setAnimatedLink(e.target.innerText) //Literally use the text in the H2 for each link to set state
  
  }
  return (
    <motion.div
      className={"DirectoryPageContainer"}
      initial={{
        opacity: 0,
        transform: `translateY(500px)`
      }}
      animate={{
        opacity: 1,
        transform: `translateY(00px)`,
      }}
      exit={{opacity: 0}}
      transition={{ duration: 4 }}
    >
      <Link to='/projects' className={animatedLink === "PROJECTS" ? "Animated" : ""} onClick={(e) => animateLink(e)}><h2>Projects</h2></Link>
      <Link><h2>Skills</h2></Link>
      <Link><h2>Contact</h2></Link>
    </motion.div>
  );
};
