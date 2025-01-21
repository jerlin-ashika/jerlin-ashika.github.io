import React from "react";
import "./education.css";
const Education = () => {
  const education = [
    {
      id: 1,
      title: "2022 - Master of Science",
      collage: "Madras Christian Collage",
      percent: "73%",
      line: true,
    },
    {
      id: 2,
      title: "2020 - Bachelor of Science",
      collage: "Women's Christian Collage",
      percent: "87.5%",
      line: true,
    },
    {
      id: 3,
      title: "2017 - Higher Secondary",
      collage: "Bethlahem Metric Hr Sec School",
      percent: "82%",
      line: true,
    },
    {
      id: 3,
      title: "2015 - Seconday School",
      collage: "Bethlahem Metric Hr Sec School",
      percent: "92%",
      line: true,
    },
  ];
  return (
    <>
      <div>
        <div className="name-part2 tittle-font-size d-flex justify-content-center">
          Education
        </div>
        <div className="mi-font f-18 d-flex justify-content-center text-center">
          <div class="education-container row">
            {education?.map((dt) => (
              <div class="step completed col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                <div class="v-stepper">
                  <div class="circle"></div>
                  {dt?.line && <div class="line"></div>}
                </div>

                <div class="content">
                  <div className="fnt-600 font-clr">{dt?.title}</div>
                  <a href="https://mcc.edu.in/">
                    <div>{dt?.collage}</div>
                  </a>
                  <div className="font-clr">{dt?.percent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
