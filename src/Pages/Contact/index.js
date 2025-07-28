import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div>
        <div className="name-part1 tittle-font-size d-flex justify-content-center">
          Contact
        </div>
        <div className="w-100 d-flex justify-content-center mi-font my-4">
          <div class="contact-form-container">
            <form
              action="mailto:jerlinashikaj@gmail.com"
              method="post"
              enctype="text/plain"
              className="row"
            >
              <div className="col-12 col-lg-4">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="col-12 col-lg-4">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="col-12 col-lg-4">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div className="col-12 col-lg-12">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <div className="col-12 d-flex justify-content-center ">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
