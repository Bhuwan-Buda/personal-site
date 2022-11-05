import React from "react";
import HomepageImage from "../Components/HomePageComponents/HomepageImage";
import AboutMe from "../Components/HomePageComponents/AboutMe";
import Education from "../Components/HomePageComponents/Education";
import CodingQuote from "../Components/HomePageComponents/CodingQuote";
import ReactCode from "../Components/HomePageComponents/ReactCode";
import Footer from "../Components/HomePageComponents/Footer";
const Homepage = () => {
  return (
    <>
      <HomepageImage />
      {/* <ReactCode /> */}
      <AboutMe />
      <CodingQuote />
      <Education />
      <Footer />
    </>
  );
};

export default Homepage;
