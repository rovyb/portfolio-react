import { HomePage } from "./Pages/HomePage/HomePage.component";
import { StarBackground } from "./components/StarBackground/StarBackground.component";
import "./App.css";
import React, { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { DirectoryPage } from "./Pages/DirectoryPage/DirectoryPage.component";
import {ProjectsPage} from "./Pages/ProjectsPage/ProjectsPage.components"
import { AnimatePresence } from "framer-motion";
import { NavigationBar } from "./components/NavigationBar/NavigationBar.component";

function App() {
  const location = useLocation();

  return (
    <StarBackground>
      <div className="maxWidthContainer">
        <AnimatePresence>
          {location.pathname !== "/" && <NavigationBar/>}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <React.Fragment>
              <Route path="/directory" element={<DirectoryPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </React.Fragment>
          </Routes>
        </AnimatePresence>
      </div>
    </StarBackground>
  );
}

export default App;

/* 
Proj structure:

First page must render without navigation, then navigation should persist unless user clicks to home. Conditional render 2 things -> homepage, otherPages

First page - H1, H2, H4 Scroll down

All others -
Navigation in top
...RestOfPage



*/
