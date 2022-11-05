import React from "react";
import { Grid, Typography } from "@mui/material";
import "./style.css";

const CodingQuote = () => {
  return (
    <Grid className="coding_quotes_container">
      <Typography variant="h4" component="h4">
        "Code can't lie, comments can."
      </Typography>
      <Typography variant="body2" component="p">#ReactDeveloper</Typography>
    </Grid>
  );
};

export default CodingQuote;
