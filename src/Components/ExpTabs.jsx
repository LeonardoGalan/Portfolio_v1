import React from 'react';
import { Tabs } from '@mantine/core';
import "../styles/ExpTabs.css"

export default function ExpTab() {

        const experienceItems = {
            HealthFirst: {
                jobTitle: "Software Engineer Intern @ ",
                duration: "JUN 2023 - AUG 2023",
                desc: [
                    "Engineered a responsive UI/UX for HealthFirst’s Patient 360 web application, leveraging React and TypeScript. This project for HealthFirst - a leading health insurance provider, serving over 1.8 million members in New York, significantly improved the accessibility of patient data and increased efficiency for healthcare professionals.",
                    "Collaborated with the frontend and backend team on UI design and information architecture, introducing user-centric features (e.g., drag-and-drop functionality for moving patient data tables around, hide/show certain data information such as patient vitals, medications, care team, etc), which enhanced overall application usability"
                ]
            },
            "HeadStarter AI": {
                jobTitle: "Software Engineer Fellow @ ",
                duration: "JUL 2024 - PRESENT",
                desc: [
                    "Building 5 AI driven applications utilizing React, JavaScript, NextJS and AWS technologies",
                    "Participated in weekly hackathons, collaborated on 3 projects on 4 person teams, and contributed to the code base of a startup company."
                ]
            },
            "Scarce City": {
                jobTitle: "Software Engineer Intern @ ",
                duration: "JUN 2022 - AUG 2022",
                desc: [
                    "Improved user experience of Scarce City - a Bitcoin goods marketplace by developing, structuring, and testing new features using TypeScript, NextJS, and Docker with a PostgreSQL database.",
                    "Rendered creator images from the backend into the frontend to display an avatar logo for each associated digital/physical item being sold."
                ]
            },
            "CUNY Tech Talent Pipeline Bootcamp": {
                jobTitle: "Web Development Fellow @ ",
                duration: "DEC 2021 - AUG 2022",
                desc: [
                    "One of 50 selected to participate in the intensive NYC Tech Talent Pipeline Web Development Residency program which provides hands-on training in full-stack web development.",
                    "Worked on a total of 10 projects as part of 4 different teams, utilizing JavaScript, ReactJS, HTML, CSS, RESTful APIs, Heroku, database management systems, and functional programming."
                ]
            },
        }
    
        const [value, setValue] = React.useState(Object.keys(experienceItems)[0]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    

  return (
    <Tabs
      color="#64ffda"
      orientation="vertical"
      value={value}
      onChange={handleChange}
    >
      <Tabs.List className="tab-list">
        {Object.keys(experienceItems).map((key, i) => (
          <Tabs.Tab className="tab" value={key} key={i}>
            {key}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {Object.keys(experienceItems).map((keys, i) => (
        <Tabs.Panel value={keys} index={i} key={i}>
          <span className="job-title">{experienceItems[keys]["jobTitle"]}</span>
          <span className="job-company">{keys}</span>
          <div className="job-duration">
            {experienceItems[keys]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[keys]["desc"].map((descItem, i) => (
              <li key={i}> {descItem}</li>
            ))}
          </ul>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
