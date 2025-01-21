import React from "react";
import Header from "../Molecules/Header";
import "./Home.css";
import MyImage from "../../Images/MyImage.png";
import linkedin_d from "../../Images/linkedin-d.svg";
import linkedin_w from "../../Images/linkedin-w.svg";
import email_d from "../../Images/email-d.svg";
import email_w from "../../Images/email-w.svg";
import instagram_d from "../../Images/instagram-d.svg";
import instagram_w from "../../Images/instagram-w.svg";
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
  console.log(":darkMode :", darkMode);
  return (
    <>
      <Header />
      <div className=" Home-container font-clr" id="home">
        <div className="row m-0 mt-sm-80">
          <div className="col-lg-6 pt-lg-5  mt-lg-5 ps-lg-3">
            <div className="mi-font f-26  pt-lg-5 sm-pdl-1">
              <span className="">HELLO,</span>{" "}
              <span className="text-secondary"> MY NAME IS</span>
            </div>
            <div className="magician-font name-font-size px-3 sm-di-flex">
              <span className="name-part1">JERLIN</span>
              {"  "}
              <span className="name-part2">ASHIKA</span>
            </div>
            <div className="px-3 sm-di-flex">
              <span className="mi-font f-24 ">I AM, </span>{" "}
              <span className="magician-font f-24 ">Frontend Developer</span>
            </div>
            <div className=" px-3">
              <div className="pt-4 pb-2">
                <span className="mi-font f-18 ">
                  From TN, India. I have rich experience in web design, also I
                  am good at React Framework.
                  <br className="" />I love to talk with you about our unique
                </span>
              </div>
            </div>

            <div className=" px-3 pt-4 d-flex">
              <a href="mailto:jerlinashikaj@gmail.com" className="me-2">
                <img
                  className="icon-small-size "
                  src={darkMode ? email_w : email_d}
                  title="Email"
                  alt="Email"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jerlin-ashika"
                className="me-2"
              >
                <img
                  className={`icon-small-size `}
                  src={darkMode ? linkedin_w : linkedin_d}
                  title="Linkedin"
                  alt="Linkedin"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jerlin-ashika"
                className="me-2"
              >
                <img
                  className="icon-small-size "
                  title="Instagram"
                  alt="Instagram"
                  src={darkMode ? instagram_w : instagram_d}
                />
              </a>
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
                    <div className="col">
                      <div className="row">Years</div>
                      <div className="row">experience</div>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
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
