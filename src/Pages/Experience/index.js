import React from "react";

const Experience = () => {
  const skills = [
    {
      company: "iTrobes Technology",
      role: "Associate Software Developer ",
      link: "https://www.itrobes.com/",
      year: "April 2023- PRESENT (Full Time) ",
      des: "I am working on a Next.js e-commerce site where customers book chefs and chefs manage menus, ensuring efficiency and user-friendliness. Using server-side rendering and SEO, the platform delivers fast performance. I’ve built applications for managing employee data, inventory, and procurement, boosting productivity. With React.js, I created responsive interfaces and improved usability. Redux ensured state consistency, enhancing performance by 43%. Collaborating with backend teams, I integrated REST APIs and optimized code, reducing page load time by 28%.",
    },
    {
      company: "Gway Technology",
      role: "Frontend Developer ",
      link: "https://www.gwayerp.com/",
      year: "November 2022 – April 2023 ",
      des: "Developed and maintained purchase web applications, enhancing procurement processes and improving workflow efficiency. Designed and implemented responsive dashboards using Bootstrap, delivering visually appealing interfaces for clients and stakeholders. These dashboards provided real-time insights, improved usability, and supported decision-making. By focusing on responsive design, I ensured seamless experiences across devices, meeting diverse user needs while maintaining consistent branding and functionality. This work significantly boosted productivity and client satisfaction.",
    },
  ];
  return (
    <>
      <div>
        <div className="name-part2 tittle-font-size d-flex justify-content-center">
          Experience
        </div>
        <div className="row d-flex justify-content-center gap-2 m-0 mt-4">
          {skills?.map((dt) => (
            <div className="col-12 col-lg-5 border-cus px-0 py-2">
              <a href={dt?.link} target="_blank">
                <div className="row d-flex justify-content-center fnt-600 f-20 m-0 mt-2">
                  {dt?.company}
                </div>
                <div className="row d-flex justify-content-center  f-14 m-0 sm-text-center ">
                  {dt?.role} - {dt?.year}
                </div>
                <div className="row  text-center  border-top-cus m-0 mt-3">
                  <div className="col mt-3">{dt?.des}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Experience;
