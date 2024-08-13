import React from "react";
import "../styles/About_me.css";
import javaScript from "../../public/javascript-js.svg";
import reactIcon from "../../public/react.svg";
import typeScript from "../../public/typescript-icon.svg";
import nodejs from "../../public/nodejs.svg";
import postgresql from "../../public/postgresql-original-wordmark.svg";
import javaicon from "../../public/java-original-wordmark.svg";

export default function About_Me() {
  const one = (
    <p>
      Hello there, my name is Leonardo Galan or better known by my peers as the
      goat of all goats. I am a recent graduate from CUNY Brooklyn College in
      New York City where I recieved my Bachelors Of Science in Computer
      Science.
      <br /> The following is the tech stack I am proficient in and currently
      use:
    </p>
  );
  const skillArr = [
    { name: "React", img: reactIcon },
    { name: "JavaScript ES6+", img: javaScript },
    { name: "TypeScript", img: typeScript },
    { name: "Java", img: javaicon },
    { name: "PostgreSQL", img: postgresql },
    { name: "node.js", img: nodejs },
  ];
  const skillList = skillArr.map((skill, key) => (
    <li key={key}>
      <img src={skill.img} alt={skill.name} className="skill-icon" />
      {skill.name}
    </li>
  ));

  const two = (
    <p>
      Besides programming I enjoy strength training, competitive gaming, am a
      movie buff {"("}thrillers, suspense, psychological{")"}, and anime/manga!
    </p>
  );
  return (
    <>
      <div id="about">
        <div className="section-header">
          <span className="section-title">About me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}

            <ul className="skill-list">{skillList}</ul>
            {two}
          </div>
          <div className="about-image">
            <img
              alt="Griffith"
              src="https://media1.tenor.com/m/-ULd_LCEQIEAAAAC/grifith-berserk.gif"
              loop
            />
          </div>
        </div>
      </div>
    </>
  );
}