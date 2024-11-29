import React from "react";
import Event from "./Event";
import EventTimeline from "./EventTimeline";
import FacultyInfo from "./FacultyInfo";
import Team from "./Team";
import FAQ from "./FAQs";
import Sponsors from "./Sponsors";

const Hero = () => {
  return (
    <div>
      <Event></Event>
      <EventTimeline></EventTimeline>
      <FacultyInfo></FacultyInfo>
      <Team></Team>
      <FAQ></FAQ>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Hero;
