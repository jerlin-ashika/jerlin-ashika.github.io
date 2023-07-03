import React, { useState } from "react";
import "./Header.css";
import menu4 from "../../Images/menu4.svg";
import menu4_w from "../../Images/menu4 _w.svg";
import dark_mode from "../../Images/dark_mode.svg";
import close from "../../Images/close.svg";
import light_high from "../../Images/light_high.svg";
import { useDispatch } from "react-redux";
import { changeDarkMode } from "../../Redux/StaticData/action";

const Header = () => {
  const dispatch = useDispatch();

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [dark, setDark] = useState(true);
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

  return (
    <>
      <div className="header-container d-between row">
        <div className="col">
          <span className="font-clr f-24 magician-font">CODE MAGICIAN</span>
        </div>
        <div className="col">
          <div className="row h-100">
            <img
              className="icon-size px-1 icon-clr"
              src={dark ? dark_mode : light_high}
              alt="dark_mode"
              onClick={toggleDarkMode}
            />
            <img className=" px-2" src="" alt="" />
            <img
              className={` icon-size px-1 top-data  data ${
                isSideNavOpen && render
                  ? "change"
                  : !isSideNavOpen && render
                  ? "change1"
                  : ""
              }`}
              src={`${
                !isSideNavOpen && dark
                  ? menu4
                  : !isSideNavOpen && !dark
                  ? menu4_w
                  : close
              }`}
              alt="menu"
              onClick={openNav}
            />
          </div>
        </div>
      </div>
      <div className={`sidenav ${isSideNavOpen ? "open" : ""} row`}>
        <div className="col h-100">
          {/* <img
            className="icon-size px-1  h-100"
            src={group_line}
            alt="group_line"
          /> */}
        </div>
        <div className={`col`}>
          <span className="row side-content">About</span>
          <span className="row side-content">Services</span>
          <span className="row side-content">Blogs</span>
          <span className="row side-content ">Contact</span>
        </div>
      </div>
    </>
  );
};

export default Header;
