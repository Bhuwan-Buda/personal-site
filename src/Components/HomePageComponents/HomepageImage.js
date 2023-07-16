import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ContactQr from "../ContactQr";
import "./style.css";

const links = [
  {
    id: 1,
    icon: (
      <FacebookRoundedIcon
        sx={{
          color: "#3b5998",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "Facebook",
    href: "https://www.facebook.com/bhuwan.buda.1",
  },
  {
    id: 2,
    icon: (
      <GitHubIcon
        sx={{
          color: "#333333",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "GitHub",
    href: "https://github.com/Bhuwan-Buda",
  },
  {
    id: 3,
    icon: (
      <InstagramIcon
        sx={{
          color: "#8a3ab9",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "Instagram",
    href: "https://www.instagram.com/bhuwan.buda.1/",
  },
  {
    id: 4,
    icon: <ContactQr />,
    name: "Add to contact"
  },
  {
    id: 5,
    icon: (
      <LinkedInIcon
        sx={{
          color: "#0e76a8",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bhuwan-buda-a7538b180/",
  },
  {
    id: 6,
    icon: (
      <EmailIcon
        sx={{
          color: "#8a3ab9",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "Mail",
    href: "mailto:bhuwanbuda143@gmail.com",
  },
  {
    id: 7,
    icon: (
      <PhoneInTalkIcon
        sx={{
          color: "#444444",
          fontSize: "2rem",
          background: "linear-gradient(90deg, #c3a2fe, #9358fd)",
          borderRadius: "100%",
          padding: "4px",
        }}
      />
    ),
    name: "Call",
    href: "tel:9868792901",
  },
];

const HomepageImage = () => {
  return (
    <Grid
      container
      spacing={1}
      direction={{ xs: "column", sm: "column", md: "column" }}
      justifyContent="center"
      alignItems="center"
      className="image-container"
    >
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="body1" component="p">
          - HELLO -
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos="fade-left">
        <Typography variant="body2" component="h5">
          I'm <strong>Bhuwan</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos="flip-up">
        <Typography variant="subtitle1" component="i">
          A Front-End Web Developer
          <strong> (at Soori Technology Pvt. Ltd.)</strong> from Kathmandu with
          a year of <br />
          experience who is comfortable working with JavaScript, HTML, CSS,{" "}
          <br /> SCSS, Bootstrap, React.js, MUI and responsive web design
          <br /> to deliver exceptional customer experience.
        </Typography>
      </Grid>
      <Grid item xs={12} className="social-links-container">
        <SpeedDial
          ariaLabel="SpeedDial for links"
          FabProps={{ variant: "extended" }}
          icon={"get in touch"}
          direction="up"
          className="speedDial-container"
        >
          {links?.map((link) => (
            <SpeedDialAction
              key={link.id}
              icon={link.icon}
              tooltipTitle={link.name ? link.name : ""}
              component="a"
              target="_blank"
              tooltipPlacement="top"
              href={link.href ? link.href : undefined}
            />
          ))}
        </SpeedDial>
      </Grid>
    </Grid>
  );
};

export default HomepageImage;
