import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "column", md: "row" }}
      sx={{ display: { xs: "flex", sm: "flex", md: "flex" } }}
      className="footer_container"
    >
      <Grid item xs={4}>
        <LocationOnIcon className="icon" />
        <Typography variant="p" component="p">
          Kathmandu, Nepal
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <PhoneIcon className="icon" />
        <Typography variant="p" component="p">
          +977 986-8792901
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <EmailIcon className="icon" />
        <Typography variant="p" component="p">
          bhuwanbuda143@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">All Rights Reserved. &copy; Bhuwan Buda.</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
