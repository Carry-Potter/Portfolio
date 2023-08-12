import React from "react";
import "./header.css";
import CTA from "./CTA";
import Sociall from "./Sociall";
import Typed from "react-typed";
import Lottie from "lottie-react";
import animationData from "../../assets/22.json";

const Header = () => {
  return (
    <header className="bg">
      <div className="container header__container">
        <div className="left-section">
          <div className="left-content">
            <h5 className="title_second">Zdravo,</h5>
            <h5 className="title_second">ja sam</h5>
            <h1 className="title_second">Ivan Jelić</h1>
            <h5 className="text-light" type="text"></h5>
            <CTA />
          </div>
        </div>

        <div className="right-section">
          <div className="sectionss">
            <div className="animate-container">
              <Lottie animationData={animationData} className="animate" />
            </div>
          </div>
        </div>
      </div>

      <Sociall />
      <a href="#contact" className="scroll__down ">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
