import React from "react";
import Header from "../Molecules/Header";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);

  return (
    <>
      <Header />
      <div className="row">
        <div className="col p-3 ">
          <div className="mi-font f-26">
            <span className="font-clr">HELLO,</span>{" "}
            <span className="text-secondary"> MY NAME IS</span>
          </div>
          <div className="name-font name-font-size px-3 ">
            <span className="name-part1">JERLIN</span>
            {"  "}
            <span className="name-part2">ASHIKA</span>
          </div>
          <div className="px-3">
            <span className="mi-font f-24 font-clr">I AM, </span>{" "}
            <span className="magician-font f-24 font-clr">Web Developer</span>
          </div>
          <div className=" px-3">
            <div className="py-4">
              <span className=" magician-font f-20 font-clr">
                From TN, India. I have rich experience in web design, also I am
                good at React Framework.
                <br className="" />I love to talk with you about our unique
              </span>
            </div>
          </div>
        </div>
        <div className="col">2</div>
      </div>
    </>
  );
};
export default Home;
