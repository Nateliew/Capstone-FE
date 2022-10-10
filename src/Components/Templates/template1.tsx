import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template1.css";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template1({
  name,
  email,
  keyskills,
  work,
  education,
  phone,
}: UserTypes) {
  // const obj = { font: "A", fontSize: 8, color: "white" };
  return (
    <div className="template">
      <div className="template1-container">
        <div className="template1-header-container">
          <div className="template1-name">{name}</div>
          <div className="template1-contact-container">
            <div className="template1-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}📧
              {email}
            </div>
            <div className="template1-phone">📱{phone}</div>
          </div>
        </div>
        <div className="template1-blurb">Bla bla blablablbalba</div>
        <div className="template1-bottom-headers">Work Experience</div>
        <div className="template1-work">
          {work.map((place, index) => {
            return (
              <div className="template1-workplace" key={index}>
                {place.place}
                {place.description}
                {place.date_started}
                {place.date_ended}
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Education</div>
        <div className="template1-education">
          {education.map((place, index) => {
            return (
              <div className="template1-educationplace" key={index}>
                {place.place}
                {place.description}
                {place.date_started}
                {place.date_ended}
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Key Skills</div>
        <div className="template1-skills">
          {keyskills.map((skill, index) => {
            return (
              <div className="template1-skill" key={index}>
                {skill.name}
                {skill.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Template1;
