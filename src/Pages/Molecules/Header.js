import React, { useState } from "react";
import "./Header.css";
import "./customScrollbar.css";
import menu_b from "../../Images/menu-black.png";
import menu_w from "../../Images/menu-white.png";
import close_d from "../../Images/close_d.svg";
import close_w from "../../Images/close_w.svg";
import arrow_w from "../../Images/arrow_w.svg";
import dark_mode from "../../Images/dark_mode.png";
import light_high from "../../Images/light_mode.png";
import logo from "../../Images/namelogo.svg";
import whitelogo from "../../Images/white-logo.svg";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "../../Redux/StaticData/action";

const Header = () => {
  const dispatch = useDispatch();

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [render, setRender] = useState(false);

  const openNav = () => {
    console.log("open nav is working :");
    setIsSideNavOpen(!isSideNavOpen);
    setRender(true);
  };
  const toggleDarkMode = () => {
    console.log("onclick function is working");
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
                  isSideNavOpen && !dark ? "icon-small-size" : "icon-size"
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
      </div>
      <div className={`sidenav ${isSideNavOpen ? "open" : ""} row m-0`}>
        {/* <div className="col h-100"></div> */}
        <div className={`col p-0 pt-4`}>
          {sidebar?.map((dt) => (
            <a href={dt?.link} onClick={() => setIsSideNavOpen(false)}>
              <span className="row m-0 side-content">
                <img className="icon-size" src={`${arrow_w}`} alt="arrow" />
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
