import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  return (
    <>
    <div className="Home-container font-clr">
        Currentlt E
    </div>
    </>
  );
};
export default Home;
