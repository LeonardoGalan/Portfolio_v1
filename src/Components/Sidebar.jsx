import React from "react";
import portfolioPfp from "../assets/portfolio_pfp.jpg"; 
import { Avatar } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import linkedInIcon from "../../public/linkedin-original.svg";
import gitHubIcon from "../../public/github-square.svg";
import emailIcon from "../../public/email.svg";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Avatar
        size="2xl"
        name="Leo Galan"
        src={portfolioPfp}
        className="avatar"
      />
      <h1 className="sidebar-description">
        Hello there, I hope you enjoy my portfolio and the rest of your day.
      </h1>
      <a href="mailto:leonardogalan2@gmail.com" className="intro-contact">
        <MdEmail className="email-icon" />
        Say Hi!
      </a>
      <div className="contact-icons">
        <a href="mailto:leonardogalan2@gmail.com">
          <img src={emailIcon} alt="Email"></img>
        </a>
        <a href="https://www.linkedin.com/in/leonardogalan/">
          <img src={linkedInIcon} alt="LinkedIn"></img>
        </a>
        <a href="https://github.com/LeonardoGalan">
          <img src={gitHubIcon} alt="GitHub"></img>
        </a>
      </div>
    </div>
  );
}