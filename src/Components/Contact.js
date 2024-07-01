import React from "react";
import useWindowScrollToTop from "./useWindowScrollToTop";
// import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";

const Contact = () => {
  useWindowScrollToTop();
  return (
    <>
      {/* <!--CONTACT --> */}
      <div className="contact_main">
        <div className="contact_info">
          <div className="container1">
            <ul>
              <li>Shreyash Koli</li>
            </ul>
            <ul>
              <li>Email: shreyashkoli4141@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="form">
          <form action="http://httpbin.org/post" method="POST">
            <label>First Name</label>
            <br />
            <input type="text" />
            <br />
            <label>Last Name</label>
            <br />
            <input type="text" />
            <br />
            <label>Email Adress</label>
            <br />
            <input type="tel" />
            <br />
            <label>Mobile</label>
            <br />
            <input type="email" />
            <label>Message</label>
            <br />
            <textarea />
            {/* <div className='Recaptcha' >
                  <ReCAPTCHA
    sitekey="6Ld7iNkpAAAAABAbcarRoYneB83AfMB-M-bEO8TG"/>
    </div> */}
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
