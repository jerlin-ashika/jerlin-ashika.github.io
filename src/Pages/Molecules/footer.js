import React from "react";
import linkedin_d from "../../Images/linkedin-d.svg";
import linkedin_w from "../../Images/linkedin-w.svg";
import email_d from "../../Images/email-d.svg";
import email_w from "../../Images/email-w.svg";
import instagram_d from "../../Images/instagram-d.svg";
import instagram_w from "../../Images/instagram-w.svg";
import { useSelector } from "react-redux";
const Footer = () => {
  const { darkMode } = useSelector((state) => state.StaticReducer);
  return (
    <>
      <div className={`py-20 pt-20 px-50 sm:px-20 row m-0`}>
        <div className="col-auto font-clr col-md col-lg f-12 d-flex align-items-center p-0  d-flex justify-content-start ps-2">
          Copyright @2025 jerlin_ashika_j
        </div>
        <div className=" ms-auto col-auto  col-md-auto col-lg-auto ps-1  justify-content-end mobile-copy-social-icon">
          <a href="mailto:jerlinashikaj@gmail.com" className="me-2">
            <img
              className="icon-xsmall-size "
              src={darkMode ? email_w : email_d}
              title="Email"
              alt="Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/jerlin-ashika" className="me-2">
            <img
              className={`icon-xsmall-size `}
              src={darkMode ? linkedin_w : linkedin_d}
              title="Linkedin"
              alt="Linkedin"
            />
          </a>
          <a href="https://www.linkedin.com/in/jerlin-ashika" className="me-2">
            <img
              className="icon-xsmall-size "
              title="Instagram"
              alt="Instagram"
              src={darkMode ? instagram_w : instagram_d}
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
