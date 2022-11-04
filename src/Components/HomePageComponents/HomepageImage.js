import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import image from "../../Assets/image_bg_removed.png";
import htmlLogo from "../../Assets/html_logo.png";
import cssLogo from "../../Assets/css_logo.png";
import javaScriptLogo from "../../Assets/javascript_logo.png";
import bootstrapLogo from "../../Assets/bootstrap_logo.png";
import reactLogo from "../../Assets/react_logo.png";
import muiLogo from "../../Assets/mui_logo.png";
import "./style.css";

const HomepageImage = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="image-container"
    >
      <Grid item>
        <Box className="image-box">
          <img src={image} alt="image " />
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="p">
          Hi There, I Am Bhuwan <br /> Frontend Developer
        </Typography>
        <br />
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Chip
            avatar={<Avatar alt="html" src={htmlLogo}></Avatar>}
            label="Html"
            variant="outlined"
            color="success"
            component="a"
            target="_blank"
            href="https://www.w3schools.com/html/default.asp"
            clickable
          />
          <Chip
            avatar={<Avatar alt="css" src={cssLogo}></Avatar>}
            label="CSS"
            variant="outlined"
            color="primary"
            component="a"
            target="_blank"
            href="https://css-tricks.com/"
            clickable
          />
          <Chip
            avatar={<Avatar alt="javascript" src={javaScriptLogo}></Avatar>}
            label="JavaScript"
            variant="outlined"
            color="default"
            component="a"
            target="_blank"
            href="https://www.javascript.com/"
            clickable
          />
          <Chip
            avatar={<Avatar alt="bootstrap" src={bootstrapLogo}></Avatar>}
            label="Bootstrap"
            variant="outlined"
            color="error"
            component="a"
            target="_blank"
            href="https://getbootstrap.com/"
            clickable
          />
          <Chip
            avatar={<Avatar alt="react" src={reactLogo}></Avatar>}
            label="React"
            variant="outlined"
            color="info"
            component="a"
            target="_blank"
            href="https://reactjs.org/"
            clickable
          />
          <Chip
            avatar={<Avatar alt="mui" src={muiLogo} />}
            label="Mui"
            variant="outlined"
            color="warning"
            component="a"
            target="_blank"
            href="https://mui.com/"
            clickable
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomepageImage;
