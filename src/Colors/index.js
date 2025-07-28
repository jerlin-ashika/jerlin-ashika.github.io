import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Color = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  console.log("darkmode", darkMode);
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode === false) {
      root.style.setProperty("--primary", "#f7f6f4");
      root.style.setProperty("--secondary", "#a1400f"); //other color #ebdbf4
      root.style.setProperty("--font-color", "#442b1c");
    } else {
      root.style.setProperty("--primary", "#010101");
      root.style.setProperty("--secondary", "#a1400f");
      root.style.setProperty("--font-color", "#fff8f8");
    }
  }, [darkMode]);
  return <></>;
};
export default Color;
