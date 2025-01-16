import React from "react";
import Event from "./Event";
import EventTimeline from "./EventTimeline";
import FacultyInfo from "./FacultyInfo";
import Team from "./Team";
import FAQ from "./FAQs";
import Sponsors from "./Sponsors";
import SecretaryInfo from "./SecretaryInfo";
import Gallery from "./Gallery";
import Collaboration from "./Collaboration";
import Reels from "./Reels";

const Hero = () => {
  return (
    <div>
      <Event></Event>
      <Collaboration></Collaboration>
      <EventTimeline></EventTimeline>
      <Gallery></Gallery>
      <Reels></Reels>

      <FacultyInfo></FacultyInfo>
      <SecretaryInfo></SecretaryInfo>
      <Team></Team>
      <FAQ></FAQ>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Hero;
