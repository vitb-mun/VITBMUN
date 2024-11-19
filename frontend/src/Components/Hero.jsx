import React from "react";
import Event from "./Event";
import EventTimeline from "./EventTimeline";
import FacultyInfo from "./FacultyInfo";
import Team from "./Team";
import FAQ from "./FAQs.JSX";

const Hero = () => {
  return (
    <div>
      <Event></Event>
      <EventTimeline></EventTimeline>
      <FacultyInfo></FacultyInfo>
      <Team></Team>
      <FAQ></FAQ>
    </div>
  );
};

export default Hero;
