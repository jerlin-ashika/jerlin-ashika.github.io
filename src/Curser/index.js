import React, { useEffect, useState, useRef } from "react";
import "./curser.css";

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });
  const [outlineStyle, setOutlineStyle] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const cursorRef = useRef(null);
  const outlineRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cursorRef.current || !outlineRef.current) return;

    setCursorStyle({ top: e.pageY, left: e.pageX });

    setTimeout(() => {
      if (outlineRef.current) {
        const outlineTop = e.pageY - 13;
        const outlineLeft = e.pageX - 13;
        setOutlineStyle({ top: outlineTop, left: outlineLeft });
      }
    }, 80);
  };

  const handleClick = () => {
    // Handle click logic
  };

  const handleLinkOver = () => {
    setIsHovered(true);
  };

  const handleLinkOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} style={cursorStyle}></div>
      <div
        className={`outline ${isHovered ? "hover" : ""}`}
        ref={outlineRef}
        style={outlineStyle}
      ></div>
    </>
  );
};

export default Cursor;
