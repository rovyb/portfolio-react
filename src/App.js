import { HomePage } from "./Pages/HomePage/HomePage.component";
import { StarBackground } from "./components/StarBackground/StarBackground.component";
import "./App.css";
import React from "react";

function App() {
  return (
    <StarBackground>
      <div>
        <HomePage />
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
