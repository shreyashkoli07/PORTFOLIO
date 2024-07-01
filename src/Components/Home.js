import React, { useEffect } from "react";
import Typewriter from "t-writer.js";
import "./home.css";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
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
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { IoBagHandle } from "react-icons/io5";
import useWindowScrollToTop from "./useWindowScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    const target = document.querySelector("#typewriter");
    target.innerHTML = "";

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: "#2FD911",
    });

    writer.rest(1000).type("FullStack Developer").rest(500).remove(20).start();
    writer.rest(1000).type("Web Designer").rest(500).remove(4).start();
  }, []);

  // resume dowloaing
  const handleDownload = () => {
    toast("Downloading Resume...");
    const resumeUrl = "/Shreyash_s_Resume (1).pdf"; // Ensure this path is correct
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Toaster
  const notify = () => toast("Message Send Successfully..!");
  useWindowScrollToTop();
  return (
    <>
      {/* <!-- Home --> */}
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "#fff" }}
      />
      <div className="main">
        <section className="home">
          <div
            className="home-content"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h3>Hello👋, Myself</h3>
            <h1>Shreyash Koli</h1>
            <h3>
              And I'm <span id="typewriter"></span>
            </h3>
            <p>
              I am a passionate Full Stack Web Developer with a strong
              background in designing and implementing scalable web
              applications. With good experience in front-end and back-end
              development, I excel in creating user-friendly interfaces and
              robust server-side code.
            </p>
            <div className="social-media">
              <a
                href="https://github.com/shreyashkoli07?tab=repositories"
                className="link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shreyash-koli-343ab421b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                className="link"
              >
                <FaLinkedin />
              </a>
              <a className="link">
                <FaSquareXTwitter />
              </a>
              <a
                href="https://www.hackerrank.com/profile/shreyashkoli4141"
                className="link"
              >
                <FaHackerrank />
              </a>
            </div>
            <div className="media_button">
              <button type="button" onClick={handleDownload}>
                Download Resume
              </button>
              <NavLink
                to={"/hire"}
                className="hire_link_mediaquery"
                style={{ textAlign: "center" }}
              >
                Hire Me <IoBagHandle style={{ textAlign: "center" }} />
              </NavLink>
            </div>
          </div>
          <div className="home-img" data-aos="flip-left">
            <img
              src="images/profile-Photoroom.png-Photoroom__1___1_-removebg-preview.png"
              alt=""
            />
          </div>
        </section>
        {/* About */}

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
                I have honed my skills in both front-end and back-end
                development, allowing me to handle the entire development
                process from conception to deployment. My expertise in front-end
                development includes creating dynamic and responsive user
                interfaces using React, while my back-end skills involve
                building robust server-side applications with Node.js and
                Express.js. Additionally, I have a strong understanding of
                database management with MongoDB, enabling me to design and
                maintain efficient data storage solutions.
                <br />I am constantly learning and staying updated with the
                latest industry trends and technologies to deliver cutting-edge
                solutions. My goal is to create seamless and enjoyable user
                experiences while ensuring the applications I build are
                scalable, secure, and maintainable. Feel free to connect with me
                on LinkedIn or check out my projects on GitHub.
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

        {/* <!-- PROJECT SECTION --> */}
        {/* <section class="project">
          <h1 class="heading">
            My <span>Projects</span>
          </h1>

          <div class="project-container">
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/1.jpg" alt="" />
              <div class=" project-layer">
                <h4>E-commerece Website</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow"/>
              </div>
            </div>
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/2.jpg" alt="" />
              <div class=" project-layer">
                <h4>Online PlantStore Website</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow"/>
              </div>
            </div>
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/3.jpg" alt="" />
              <div class=" project-layer">
                <h4>Online Book Store Management System</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow"/>
              </div>
            </div>
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/4.jpg" alt="" />
              <div class=" project-layer">
                <h4>Netflix Clone</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow" />
              </div>
            </div>
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/5.jpg" alt="" />
              <div class=" project-layer">
                <h4>Real-Estate Website</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow"/>
              </div>
            </div>
            <div class=" project-box" data-aos="zoom-out-up">
              <img src="images/6.jpg" alt="" />
              <div class=" project-layer">
                <h4>To-do Application</h4>
                <FaArrowUpRightFromSquare className="up-right-arrow"/>
              </div>
            </div>
          </div>
        </section> */}

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
                  Built Ecommerce Website for audio/video products Where user
                  can easily able to find the electronics products.
                </Typography>
              </CardContent>
              <CardActions>
                <a className="project_href" alt="error">
                  Live preview
                </a>
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
                  Developed a comprehensive bookstore management system to
                  enable seamless CRUD operations for book inventory management.
                </Typography>
              </CardContent>
              <CardActions>
                <a className="project_href" alt="error">
                  Live preview
                </a>
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

        {/* <!--CONTACT --> */}
        <section class="contact">
          <div className="container">
            <h2>
              Contact <span className="me">Me</span>
            </h2>

            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="" required="required" />
                  <span className="text">First Name</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="" required="required" />
                  <span className="text">Last Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="email" name="" required="required" />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="tel" name="" required="required" />
                  <span className="text">Mobile</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox textarea">
                  <textarea required="required"></textarea>
                  <span className="text">Type Your Message Here........</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <button type="submit" onClick={notify}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
