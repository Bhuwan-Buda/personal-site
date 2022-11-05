import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bookImage from "../../Assets/book_image.jpg";
import "./style.css";

const Education = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row", md: "row" }}
      className="education_container"
    >
      <Grid item xs={5} className="image_container">
        <Typography variant="h5" component="h5">
          - EDUCATION -
        </Typography>
      </Grid>
      <Grid item xs={7} className="accordion_container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" component="p">
              Secondary
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <b>School Name: </b>Shree Mahakali Bal Vidyalaya
              </li>
              <li>
                <b>Address: </b>Majhagaon-17, Kanchanpur
              </li>
              <li>
                <b>Education Level: </b>SLC
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="subtitle1" component="p">
              Higher Secondary
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <b>College Name: </b>Morning Glory Higher Seconday School
              </li>
              <li>
                <b>Address: </b>Janakitole-18, Kanchanpur
              </li>
              <li>
                <b>Education Level: </b>ISC (NEB)
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle1" component="p">
              Bachelor
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <b>University Name: </b>Siddhanath Science Campus
              </li>
              <li>
                <b>Address: </b>Katan-18, Kanchanpur
              </li>
              <li>
                <b>Education Level: </b>Bachelor (CSIT)
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Education;
