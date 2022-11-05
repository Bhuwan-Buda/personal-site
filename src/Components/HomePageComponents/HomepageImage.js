import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css";

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
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
         - HELLO -
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="h5">
          My Name is <strong>Bhuwan Buda</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="i">
          I'm a frontend developer.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Chip
            avatar={<FacebookIcon sx={{ borderRadius: "100%" }} />}
            label="Facebook"
            variant="outlined"
            color="primary"
            component="a"
            target="_blank"
            href="https://www.facebook.com/bhuwan.buda.1"
            clickable
          />
          <Chip
            avatar={<GitHubIcon sx={{ borderRadius: "100%" }} />}
            label="GitHub"
            variant="outlined"
            color="default"
            component="a"
            target="_blank"
            href="https://github.com/Bhuwan-Buda"
            clickable
          />
          <Chip
            avatar={<LinkedInIcon sx={{ borderRadius: "100%" }} />}
            label="Linked In"
            variant="outlined"
            color="success"
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/bhuwan-buda-a7538b180/"
            clickable
          />
          <Chip
            avatar={<InstagramIcon sx={{ borderRadius: "100%" }} />}
            label="Instagram"
            variant="outlined"
            color="secondary"
            component="a"
            target="_blank"
            href="https://www.instagram.com/bhuwan.buda.1/"
            clickable
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomepageImage;
