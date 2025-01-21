import React from "react";
import react_w from "../../Images/reactjs-w.svg";
import next_w from "../../Images/nextjs-w.svg";
import js_w from "../../Images/javascript-w.svg";
import html_w from "../../Images/html-w.svg";
import css_w from "../../Images/css-w.svg";
import boot_w from "../../Images/bootstrap-w.svg";
import github_w from "../../Images/github-w.svg";
import scss_w from "../../Images/scss-w.svg";
import figma_w from "../../Images/figma-w.svg";
const Skills = () => {
  const skills = [
    {
      name: "Reactjs",
      src: react_w,
      link: "https://react.dev/",
      year: "2+",
    },
    {
      name: "Nextjs",
      src: next_w,
      link: "https://nextjs.org/docs",
      year: "1+",
    },
    {
      name: "Javascript",
      src: js_w,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      year: "2+",
    },
    {
      name: "SCSS",
      src: scss_w,
      link: "https://sass-lang.com/documentation/syntax/",
      year: "2+",
    },
    {
      name: "Bootstrap",
      src: boot_w,
      link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
      year: "2+",
    },
    {
      name: "CSS",
      src: html_w,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      year: "2+",
    },
    {
      name: "HTML",
      src: css_w,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      year: "2+",
    },
    {
      name: "Github",
      src: github_w,
      link: "https://github.com/",
      year: "2+",
    },
    {
      name: "Figma",
      src: figma_w,
      link: "https://www.figma.com/",
      year: "2+",
    },
  ];
  return (
    <>
      <div>
        <div className="name-part2 tittle-font-size d-flex justify-content-center text-center">
          Professional Skills
        </div>
        <div className="row d-flex justify-content-center gap-4 mt-4 sm-pdl-1">
          {skills?.map((dt) => (
            <div className="col-3 border-cus p-2">
              <a href={dt?.link}>
                <div className="row mx-auto sm-di-flex-center">
                  <div className="col-auto ps-0 text-end sm-pd-0">
                    <img
                      className="icon-size "
                      title="Reactjs"
                      alt="react"
                      src={dt?.src}
                    />
                  </div>
                  <div className="col-auto p-0 d-flex  align-items-center skill-name">
                    <span className="fnt-600">{dt?.name}</span>&nbsp;-&nbsp;
                    <span className="fnt-600">{dt?.year}</span>&nbsp; years of
                    experience
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
