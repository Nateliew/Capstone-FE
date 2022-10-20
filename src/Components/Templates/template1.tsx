import React, { useState, useEffect, ChangeEvent } from "react";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template1.css";
import axios from "axios";
import TemplateState from "./TemplateState";
import { useAuth0 } from "@auth0/auth0-react";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template1({
  username,
  email,
  keyskills,
  work,
  education,
  phone,
  user,
  updateEducation,
  updateAll,
  updateSkill,
  updateWork,
}: UserTypes) {
  //set to editing mode
  const [toggle, setToggle] = useState(true);

  const toggleClicked = () => {
    setToggle(false);
  };
  const { getAccessTokenSilently }: any = useAuth0();

  //resubmit data to backend
  const handleSubmit = async (event: any) => {
    setToggle(true);
    event.preventDefault();
    console.log("clicked");
    console.log(education);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    // Update in backend
    await axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/${user}`,
        {
          name: username,
          email: email,
          contact: phone,
          keySkills: keyskills,
          education: education,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // Clear form state
        console.log(res);
      });
  };

  return (
    <div className="template">
      <div className="template1-container">
        <div className="template1-header-container">
          <div className="template1-name">
            {toggle ? (
              username
            ) : (
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="name"
                placeholder="name"
                value={username}
                onChange={(event) => updateAll("name", event.target.value)}
              ></input>
            )}
          </div>
          <div className="template1-contact-container">
            <div className="template1-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}
              📧
              {toggle ? (
                email
              ) : (
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(event) => updateAll("email", event.target.value)}
                ></input>
              )}
            </div>
            <div className="template1-phone">
              📱
              {toggle ? (
                phone
              ) : (
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="contact"
                  placeholder="contact"
                  value={phone}
                  onChange={(event) => updateAll("contact", event.target.value)}
                ></input>
              )}
            </div>
          </div>
        </div>
        <div className="template1-blurb">Summary</div>
        <div className="template1-bottom-headers">Work Experience</div>
        <div className="template1-work">
          {work.map((company, index) => {
            return toggle ? (
              <div className="template1-workplace" key={index}>
                {company.place}
                <br />
                {company.description}
                <br />
                {company.date_started}
                <br />
                {company.date_ended}
              </div>
            ) : (
              <div className="template1-educationplace" key={index}>
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="place"
                  placeholder="COMPANY"
                  value={company.place}
                  onChange={(event) =>
                    updateWork(index, "place", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="description"
                  placeholder="DESCRIPTION"
                  value={company.description}
                  onChange={(event) =>
                    updateWork(index, "description", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="date"
                  name="date_started"
                  placeholder="date_started"
                  value={company.date_started}
                  onChange={(event) =>
                    updateWork(index, "date_started", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="date"
                  name="date_ended"
                  placeholder="date_ended"
                  value={company.date_ended}
                  onChange={(event) =>
                    updateWork(index, "date_ended", event.target.value)
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Education</div>
        <div className="template1-education">
          {education.map((educationPlace, index) => {
            return toggle ? (
              <div className="template1-educationplace" key={index}>
                {educationPlace.place}
                <br />
                {educationPlace.description}
                <br />
                {educationPlace.date_started}
                <br />
                {educationPlace.date_ended}
              </div>
            ) : (
              <div className="template1-educationplace" key={index}>
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="place"
                  placeholder="place"
                  value={educationPlace.place}
                  onChange={(event) =>
                    updateEducation(index, "place", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="description"
                  placeholder="DESCRIPTION"
                  value={educationPlace.description}
                  onChange={(event) =>
                    updateEducation(index, "description", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="date"
                  name="date_started"
                  placeholder="date_started"
                  value={educationPlace.date_started}
                  onChange={(event) =>
                    updateEducation(index, "date_started", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="date"
                  name="date_ended"
                  placeholder="date_ended"
                  value={educationPlace.date_ended}
                  onChange={(event) =>
                    updateEducation(index, "date_ended", event.target.value)
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Key Skills</div>
        {keyskills.map((keySk, index) => {
          return toggle ? (
            <div className="template1-skill" key={index}>
              {keySk.name}
              <br />
              {keySk.description}
            </div>
          ) : (
            <div>
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="name"
                placeholder="NAME"
                value={keySk.name}
                onChange={(event) =>
                  updateSkill(index, "name", event.target.value)
                }
              />
              <br />
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="description"
                value={keySk.description}
                placeholder="DESCRIPTION"
                onChange={(event) =>
                  updateSkill(index, "description", event.target.value)
                }
              />
            </div>
          );
        })}
      </div>
      {toggle ? (
        <button onClick={() => toggleClicked()}>edit</button>
      ) : (
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      )}
    </div>
  );
}

export default Template1;
