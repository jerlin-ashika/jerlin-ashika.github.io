import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Color = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  console.log("darkmode", darkMode);
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode === false) {
      root.style.setProperty("--primary", "#f6f6f6");
      root.style.setProperty("--secondary", "#d7b3ed"); //other color #ebdbf4
      root.style.setProperty("--font-color", "#504d53");
    } else {
      root.style.setProperty("--primary", "#010101");
      root.style.setProperty("--secondary", "#D99BFF");
      root.style.setProperty("--font-color", "#fff8f8");
    }
  }, [darkMode]);
  return <></>;
};
export default Color;
