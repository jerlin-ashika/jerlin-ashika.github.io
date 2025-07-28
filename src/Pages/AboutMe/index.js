import React from "react";
import "./about.css";
import popStar from "../../Images/icons/sparkling_white.png";
const AboutMe = () => {
  return (
    <>
      <div>
        <div className="name-part1 tittle-font-size d-flex justify-content-center">
          About Me
        </div>
        <div className="mi-font f-18 d-flex justify-content-center text-center mt-4">
          <div className="me-5 skill-name">
            <img
              className="icon-size-md "
              title="Reactjs"
              alt="react"
              src={popStar}
            />
          </div>
          <div className="w-40per font-clr">
            I discovered my love for frontend development during my college
            days, where I created my first interactive website. Since then,
            crafting clean and responsive designs has been my passion. For me,
            the joy lies in turning complex ideas into simple, elegant
            solutions.
          </div>
          <div className="ms-5 skill-name">
            <img
              className="icon-size-md "
              title="Reactjs"
              alt="react"
              src={popStar}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
