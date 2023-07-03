import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Education from "../Pages/Education";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/Education" element={<Education />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default MyRoute;
