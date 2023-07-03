import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Color = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  console.log("darkmode", darkMode);
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode === false) {
      root.style.setProperty("--primary", "#fbfcee");
      root.style.setProperty("--secondary", "#fbed27");
      root.style.setProperty("--font-color", "#333");
    } else {
      root.style.setProperty("--primary", "#010101");
      root.style.setProperty("--secondary", "#fbed27");
      root.style.setProperty("--font-color", "#fff8f8");
    }
  }, [darkMode]);
  return <></>;
};
export default Color;
