import React from "react";
import "../styles/About_me.css";

export default function About_Me() {
    const one = (
        <p>Hello there, my name is Leonardo Galan or better known by my peers as the goat of all goats.
            I am a recent graduate from CUNY Brooklyn College in New York City where I recieved
            my Bachelors Of Science in Computer Science.
        <br/> The following is the tech stack I am proficient in and currently use:
        </p>
    )
        const skillArr = ["React",
            "JavaScript ES6+", "TypeScript", "Java", "PostgreSQL", "node.js"
        ]
    const skillList = skillArr.map((skill, key) => <li key={key}>{skill}</li> )

    const two = (
        <p>
            Besides programming I enjoy strength training, competitive gaming, am a movie buff{'('}thrillers, suspense, psychological{')'},
            and anime/manga!
        </p>


    )
    return (
        <>
            <div id="about">
            <div className="section-header">
                <span className="section-title">
                    About me
                    </span>
                    </div>
                <div className="about-content">
            <div className="about-description">
                        {one}
                    
                <ul className="skill-list">{skillList}</ul>
                {two}

                </div>
                </div>
                    </div>


    </>
    

)



}