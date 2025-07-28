import React, { useState } from "react";
import "./Header.css";
import "./customScrollbar.css";
import menu_b from "../../Images/icons/menu_dark.png";
import menu_w from "../../Images/icons/menu_light.png";
import close_d from "../../Images/icons/close_dark.png";
import close_w from "../../Images/icons/close_white.png";
import arrow_w from "../../Images/icons/arrow_light.png";
import dark_mode from "../../Images/icons/moon_dark.png";
import light_high from "../../Images/icons/moon_light.png";
import logo from "../../Images/profile_img/namelogo.svg";
import whitelogo from "../../Images/profile_img/white-logo.svg";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "../../Redux/StaticData/action";

const Header = () => {
  const dispatch = useDispatch();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [render, setRender] = useState(false);

  const openNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    setRender(true);
  };
  const toggleDarkMode = () => {
    setDark(!dark);
    setRender(false);
    dispatch(changeDarkMode(dark));
  };

  const sidebar = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <div className="header-container  ">
        <div className="row m-0">
          <div className="col-3 p-0 image-container ps-lg-3">
            <a href="/">
              <img className="myImage my-logo" src={dark ? logo : whitelogo} />
            </a>
          </div>
          <div className="col-9 p-0 d-flex justify-content-end align-items-center pe-5">
            <div className="row">
              <img
                className="icon-size px-1 icon-clr mx-3 curser-point"
                src={dark ? dark_mode : light_high}
                alt="dark_mode"
                onClick={toggleDarkMode}
              />
              <img
                className={`${
                  !isSideNavOpen ? "icon-small-size" : "icon-size"
                }  px-1 curser-point data ${
                  isSideNavOpen && render
                    ? "change"
                    : !isSideNavOpen && render
                    ? "change1"
                    : ""
                }`}
                src={`${
                  !isSideNavOpen && dark
                    ? menu_b
                    : !isSideNavOpen && !dark
                    ? menu_w
                    : dark
                    ? close_d
                    : close_w
                }`}
                alt="menu"
                onClick={openNav}
              />
            </div>
          </div>
        </div>
        <div className="custom-cubes">
          <div class="loop cubes-top">
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
          </div>
        </div>
      </div>
      <div className={`sidenav ${isSideNavOpen ? "open" : ""} row m-0`}>
        {/* <div className="col h-100"></div> */}
        <div className={`col p-0 pt-4`}>
          {sidebar?.map((dt) => (
            <a href={dt?.link} onClick={() => setIsSideNavOpen(false)}>
              <span className="row m-0 side-content">
                <img className="icon-size-md" src={`${arrow_w}`} alt="arrow" />
                {dt?.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
