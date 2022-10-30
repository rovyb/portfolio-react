import React, { useEffect } from "react";
import "./HomePage.styles.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomePage = () => {


  return (
    <motion.div
      className="HomePageContainer"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transform: `translateY(-500px)`,
      }}
      transition={{ duration: 2 }}
    >
      <div className="TitleContainer">
        <h1 className="Name">RORY BALDUCCI</h1>
        <h3 className="Title">FRONTEND ENGINEER</h3>
      </div>
      <Link
        className="ScrollDownContainer"
        to="/directory"
      >
        <h4>View More</h4>
        <h4 className="Caret">^</h4>
      </Link>
    </motion.div>
  );
};
