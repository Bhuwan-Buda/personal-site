import React from "react";
import { Grid, Typography } from "@mui/material";
import image from "../../Assets/about_image.jpg";
import "./style.css";

const AboutMe = () => {
  return (
    <Grid className="about_container">
      <Typography variant="h4" component="h4">
        - ABOUT ME -
      </Typography>
      <Typography variant="body2" component="p">
        I'm Bhuwan Buda, a Front-End Web Developer from Kathmandu, Nepal with a
        year of experience who is comfortable working with JavaScript, HTML, CSS,
        React, MUI and responsive web design to deliver exceptional
        customer experience.
      </Typography>
    </Grid>
  );
};

export default AboutMe;
