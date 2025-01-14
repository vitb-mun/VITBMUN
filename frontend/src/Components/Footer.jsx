import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import backgroundimage from "../assets/dotted.png";

const Footer = () => {
  return (
    <div id="contactus"
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-[95vw] bg-[rgba(6,3,27,1)] text-white p-12 flex flex-col gap-4 rounded-t-[50px]">
        <div className="top flex justify-between flex-col md:flex-row gap-3">
          <div className="tabs flex justify-center">
            <ul className="flex md:gap-12 gap-2 text-lg ">
              <li className="hover:underline">
                <a href="">Home</a>
              </li>
              <li className="hover:underline">
                <a href="">Events</a>
              </li>
              <li className="hover:underline">
                <a href="">Teams</a>
              </li>
              <li className="hover:underline">
                <a href="">FAQ's</a>
              </li>
            </ul>
          </div>
          <div className="icons flex gap-8 text-3xl justify-center items-center">
            <a href="https://chat.whatsapp.com/B6IDPABiyyI6DIUkhWy6uk">
              <FaWhatsapp className="hover:cursor-pointer" />
            </a>
            <a href="/">
              <FaDiscord className="hover:cursor-pointer" />
            </a>
            <a href="/">
              <BsLinkedin className="hover:cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/vitb.mun/">
              <FaInstagram className="hover:cursor-pointer" />
            </a>
            <a href="/">
              <AiFillTwitterCircle className="hover:cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="py-10 flex flex-col gap-6">
          <div className="email">Email: mun@vitbhopal.ac.in</div>

          <div className="address w-[50%]">
            Vellore Institute of Technology Bhopal,
            <br /> Ashta, Sehore, Madhya Pradesh, India - 466114
          </div>
        </div>

        <div className="text mx-auto">&copy; 2025 MUN Club, VIT Bhopal</div>
        <div className="baseline bg-white h-[0.3px] w-[100%] mt-4 mx-auto"></div>
      </div>
    </div>
  );
};

export default Footer;
