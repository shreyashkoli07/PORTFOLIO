import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const Footer = () => {
  return (
    <div className="footer_main">
      <div className="copyright">
        <p>Copyright&copy;2024 Shreyash Koli</p>
      </div>
      <div className="socialmedia">
        <Link
          className="socialmedia_link"
          href="https://github.com/shreyashkoli07"
        >
          <FaGithub />
        </Link>
        <Link
          className="socialmedia_link"
          href="https://www.linkedin.com/in/shreyash-koli-343ab421b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
        >
          <FaLinkedin />
        </Link>
        <Link className="socialmedia_link" href="">
          <FaYoutube />
        </Link>
      </div>
    
    </div>
  );
};

export default Footer;
