import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sairaviteja186@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/saiteja_s333/">
            {" "}
            <Insta color="black" size={"4rem"} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/saiteja-gande-307354211">
            {" "}
            <LinkedIn color="black" size={"4rem"} />{" "}
          </a>
          <a href="https://github.com/GandeSaiteja1210">
            {" "}
            <Gitub color="black" size={"4rem"} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
