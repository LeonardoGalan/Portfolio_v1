import React from "react";
import "../styles/Experience_Education.css"
import ExpTab from "./ExpTabs";

export default function ExperiencePlus() {
    
    return (
      <div id="experience">
        <div className="section-header">
          <span className="section-title">Experience</span>
        </div>
        <ExpTab className="resize"></ExpTab>
      </div>
    );



}