import React from "react";
import Event from "./Event";
import EventTimeline from "./EventTimeline";
import FacultyInfo from "./FacultyInfo";
import Team from "./Team";
import FAQ from "./FAQs";
import SecretaryInfo from "./SecretaryInfo";
import Gallery from "./Gallery";
import Collaboration from "./Collaboration";

const Hero = () => {
  return (
    <div>
      <Event></Event>
      <EventTimeline></EventTimeline>
      <Gallery></Gallery>

      <FacultyInfo></FacultyInfo>
      <SecretaryInfo></SecretaryInfo>
      <Team></Team>
      <Collaboration></Collaboration>

      <FAQ></FAQ>
    </div>
  );
};

export default Hero;
