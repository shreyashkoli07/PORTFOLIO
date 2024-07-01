import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import useWindowScrollToTop from "./useWindowScrollToTop";
const Projects = () => {
  useWindowScrollToTop();
  return (
    <>
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

export default Projects;
