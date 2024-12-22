import React, { useEffect } from "react";
import "./team_view.css";
import image from "../assets/image.png";
import teams from "../assets/teams.json";
import Footer from "./Footer";

const Header = ({ team }) => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <>
      <div className="max-w-6xl heading mx-auto px-20 pt-20 pb-10 ">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
        <header>
          <h1 className=" text-5xl text-[rgba(6,3,27,1)] font-medium">{team.name}</h1>
          <p className="text-gray-500 mt-1">VITB MUN Club / Teams </p>
          <hr className="mt-4 border-gray-300" />
        </header>
      </div>
    </>
  );
};

const Member_detail = ({ member }) => {
  return (
    <div className="team-item auto_show">
      <div className="team-inner">
        <img src={image} alt="Some Random Image" />
        <div className="team-info">
          <h3>{member.name}</h3>
          <p>{member.position}</p>
          <ul className="social_icons">
            <li>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="hhhh">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Message_card = ({ team }) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="h-28 rounded-full flex flex-row justify-center items-center p-5 text-center border-2 border-[rgba(6,3,27,1)] w-2/5 text-gray-700">
        <img src="./public/inverted commas.png" className="h-10 w-10 absolute top-1/3 left-[28%]"></img>
          {team.description}
        </div>
      </div>
    </>
  )
}

const Team_detail_view = ({ team_id }) => {
  const team = teams[team_id];
  const member_html = team.members.map((member, index) => (
    <Member_detail key={index} member={member} />
  ));
  return (
    <>
      <Header team={team}></Header>
      <Message_card team={team} />
      <section className="team" >
        <div className="container    ">
          <div className="team-list   ">{member_html}</div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Team_detail_view;