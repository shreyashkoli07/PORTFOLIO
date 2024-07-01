import React from "react";
import "./home.css";
import "./contact.css";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import useWindowScrollToTop from "./useWindowScrollToTop";

const About = () => {
  useWindowScrollToTop();
  return (
    <>
      <section className="about">
        <div className="about_heading" data-aos="fade-down">
          <h1>
            About <span>me</span>
          </h1>
        </div>

        <div className="about_content">
          <div className="about_left" data-aos="fade-right">
            <img
              src="images/1000187550-fotor-2024061716332 (1)-fotor-bg-remover-20240618113941.png"
              data-aos="flip-right"
            />
          </div>
          <div className="about_right">
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Hello! I'm Shreyash Koli, a passionate MERN Stack Developer. I
              specialize in building scalable and efficient web applications
              using the MERN (MongoDB, Express.js, React, Node.js) stack.
              <br />
              Over the years, I have honed my skills in both front-end and
              back-end development, allowing me to handle the entire development
              process from conception to deployment. My expertise in front-end
              development includes creating dynamic and responsive user
              interfaces using React, while my back-end skills involve building
              robust server-side applications with Node.js and Express.js.
              Additionally, I have a strong understanding of database management
              with MongoDB, enabling me to design and maintain efficient data
              storage solutions.
              <br />I am constantly learning and staying updated with the latest
              industry trends and technologies to deliver cutting-edge
              solutions. My goal is to create seamless and enjoyable user
              experiences while ensuring the applications I build are scalable,
              secure, and maintainable. Feel free to connect with me on LinkedIn
              or check out my projects on GitHub.
            </p>
            <NavLink to={"/contact"} className="contact_link">
              Contact me
            </NavLink>
          </div>
        </div>
      </section>
      {/* <!-- Skill SECTION  --> */}
      <section class="Technology">
        <div class="skills_heading" data-aos="fade-down">
          <h1>
            {" "}
            My <span>Skills</span>
          </h1>
        </div>

        <div class="services-container">
          <div
            class="services-box "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <FaHtml5 />
          </div>

          <div class="services-box">
            <FaCss3Alt />
          </div>
          <div class="services-box">
            <FaBootstrap />
          </div>
          <div
            class="services-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <IoLogoJavascript />
          </div>
          <div class="services-box">
            <IoLogoReact />
          </div>
          <div class="services-box">
            <SiRedux />
          </div>

          <div class="services-box">
            <FaNode />
          </div>
          <div
            class="services-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SiExpress />
          </div>
          <div class="services-box">
            <SiHandlebarsdotjs />
          </div>

          <div class="services-box">
            <SiMongodb />
          </div>
          <div class="services-box">
            <RiFirebaseFill />
          </div>

          <div
            class="services-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <FaGithub />
          </div>
          <div class="services-box">
            <FaGitAlt />
          </div>
          <div class="services-box">
            <IoLogoFigma />
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="Project" data-aos="fade-down">
        <h1 className="Project_heading" data-aos="fade-down">
          Personal<span>Projects</span>
        </h1>
        <div className="cards">
          <Card sx={{ maxWidth: 350 }} data-aos="zoom-in-down">
            <CardMedia
              sx={{ height: 140 }}
              image="images/1.jpg"
              title=" Ecommerce Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ecommerce Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Built Ecommerce Website for audio/video products Where user can
                easily able to find the electronics products.
              </Typography>
            </CardContent>
            <CardActions>
              <a className="project_href">Live preview</a>
              <a
                href="https://github.com/shreyashkoli07/Electronics-ecommerce-website.git"
                className="project_href"
              >
                View Code
              </a>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }} data-aos="zoom-in-down">
            <CardMedia
              sx={{ height: 140 }}
              image="images/2.jpg"
              title="Online PlantStore App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Online Plantstore App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed Application using the ReactJs Components where user
                can buy variety of plants.
              </Typography>
            </CardContent>
            <CardActions>
              <a className="project_href" alt="error">
                Live preview
              </a>
              <a
                href="https://github.com/shreyashkoli07/Online-Plantstore-App"
                className="project_href"
              >
                View Code
              </a>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }} data-aos="zoom-in-down">
            <CardMedia
              sx={{ height: 140 }}
              image="images/3.jpg"
              title="Online Book Store Management"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Online BookStore App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed a comprehensive bookstore management system to enable
                seamless CRUD operations for book inventory management.
              </Typography>
            </CardContent>
            <CardActions>
              <a className="project_href">Live preview</a>
              <a
                href="https://github.com/shreyashkoli07/Online-Book-Management-System.git"
                className="project_href"
              >
                View Code
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="project_button">
          <a
            href="https://github.com/shreyashkoli07?tab=repositories"
            className="project_link"
          >
            View more
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
