import React, { useEffect, useState } from "react";
import Header from "../Molecules/Header";
import "./Home.css";
import MyImage from "../../Images/profile_img/mine.png";
import myCV from "../../Images/document/JERLIN_ASHIKA_J.pdf";
import { useSelector } from "react-redux";
import AboutMe from "../AboutMe";
import Education from "../Education";
import Skills from "../Skills";
import Experience from "../Experience";
import Contact from "../Contact";
import Footer from "../Molecules/footer";

const Home = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className=" Home-container font-clr" id="home">
  
        <div className="row m-0 mt-sm-80 ">
          <div className="col-lg-6 pt-lg-5  mt-lg-5 ps-lg-3 text-background-box">
            <div className="mi-font f-26  pt-lg-5 sm-pdl-1 mt-4">
              <span className="font-clr">Hey there! </span>{" "}
              <span className="text-secondary">I’m</span>
            </div>
            <div className="magician-font name-font-size px-3 sm-di-flex">
              <span className="name-part1">JERLIN</span>
              {"  "}
              <span className="name-part2">ASHIKA</span>
            </div>
            <div className="px-3 sm-di-flex">
              <span className="mi-font font-clr f-24 ">A </span>{" "}
              <span className="magician-font font-clr f-24 ">
                Frontend Developer
              </span>
            </div>
            <div className=" px-3">
              <div className="pt-4 pb-2">
                <span className="mi-font f-18 font-clr">
                 who turns ideas into pixel-perfect, interactive web experiences. From concept to code, 
                  <br className="" />I make the web look good and work even better.
                </span>
              </div>
            </div>

            <div className=" px-3 pt-4 d-flex">
              <div className="pb-4">
                <a href={myCV} download className="download-cv-button ">
                  Download CV
                </a>
              </div>{" "}
            </div>
            <div className=" px-3">
              <div className="pb-4"></div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="image-container sm-pdl-1">
              <span className="image-class">
                <img className="myImage " src={MyImage} />
                <span className="experiance-design">
                  <div className="row">
                    <div className="col experiance-size ">2+</div>
                    <div className="col experience-left-cont">
                      <div className="row">Years</div>
                      <div className="row">experience</div>
                    </div>
                  </div>
                </span>
                <span className="projects-design">
                  <div className="row">
                    <div className="col experience-left-cont">
                      <div className="row">Worked on</div>
                      <div className="row">Projects</div>
                    </div>
                    <div className="col experiance-size ">8+</div>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-cubes">
       <div class="loop cubes">
          <div class="item cubes"></div>
          <div class="item cubes"></div>
          <div class="item cubes"></div>
          <div class="item cubes"></div>
          <div class="item cubes"></div>
          <div class="item cubes"></div>
        </div>
        </div>
      <div className="about-container px-lg-3  py-5" id="about">
        <AboutMe />
      </div>
      <div className="skills-container px-lg-3  py-4" id="skills">
        <Skills />
      </div>
      <div className="education-container px-lg-3  py-4 " id="experience">
        <Education />
      </div>
      <div
        className="experience-container px-lg-3 sm-pdx-1  py-4  "
        id="education"
      >
        <Experience />
      </div>
      <div className="contact-container px-lg-3  py-4" id="contact">
        <Contact />
      </div>
      <div className="contact-container px-lg-3  py-3 border-top " id="footer">
        <Footer />
      </div>
    </>
  );
};
export default Home;
