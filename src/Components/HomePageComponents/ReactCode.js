import React from "react";
import { Grid, Typography } from "@mui/material";
import code from "../../Assets/code.png";
import "./style.css";

const ReactCode = () => {
  return (
    <Grid container direction={{ xs: "column", sm: "row", md: "row" }} className="react_code_container">
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="p">Happy Coding😊</Typography>
      </Grid>
    </Grid>
  );
};

export default ReactCode;
