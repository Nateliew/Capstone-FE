import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template3.css";
import "../../styling/TemplateStyling/template1.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Template3({
  username,
  email,
  keyskills,
  work,
  education,
  phone,
  user,
  image,
  userSummary,
  updateEducation,
  updateAll,
  updateSkill,
  updateWork,
  templateName,
  templateChoice,
  cvId,
  userBlurb,
}: UserTypes) {
  const [toggle, setToggle] = useState(true);
  const { getAccessTokenSilently } = useAuth0();

  const toggleClicked = () => {
    setToggle(false);
  };

  //resubmit data to backend
  const handleSubmit = async (event: any) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    setToggle(true);
    event.preventDefault();
    // Update in backend
    await axios.put(
      `${process.env.REACT_APP_API_SERVER}/${user}`,
      {
        name: username,
        email: email,
        contact: phone,
        keySkills: keyskills,
        education: education,
        workExperience: work,

        image,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("usersummary", userSummary);

    await axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/${user}/cv`,
        {
          summary: userSummary,
          name: templateName,
          templateId: templateChoice,
          cvId: cvId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log("res in handlesubmit", res);
      });
  };

  const printDocument = () => {
    const input = document.getElementById("divToPrint")!;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas, "pdf", 25, 50, 150, 200);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="template">
      <div className="template3-container" id="divToPrint">
        <div className="template3-info">
          <div className="template3-blurb">
            {" "}
            {toggle ? (
              userSummary
            ) : (
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="summary"
                placeholder="summary"
                value={userSummary}
                onChange={(event) => updateAll("summary", event.target.value)}
              ></input>
            )}
          </div>
          <div className="template3-bottom-headers">Work Experience</div>
          <div className="template3-work">
            {work &&
              work.map((company, index) => {
                return toggle ? (
                  <div className="template1-work-section" key={index}>
                    <div className="template1-work-header">
                      <div className="template1-place">
                        {company.place}&nbsp; <i> {company.position}</i>
                      </div>
                      <div className="template1-dates">
                        {company.date_started}-{company.date_ended}
                      </div>
                    </div>
                    {company.description}
                    <br />
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
          <div className="template3-bottom-headers">Education</div>
          <div className="template3-education">
            {" "}
            {education &&
              education.map((educationPlace, index) => {
                return toggle ? (
                  <div className="template1-education-section" key={index}>
                    <div className="template1-education-header">
                      <div className="template1-place">
                        {educationPlace.place}&nbsp;{" "}
                        <i> {educationPlace.level}</i>
                      </div>
                      <div className="template1-dates">
                        {educationPlace.date_started}-
                        {educationPlace.date_ended}
                      </div>
                    </div>

                    {educationPlace.description}
                    <br />
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
                      value={educationPlace.description || " "}
                      onChange={(event) =>
                        updateEducation(
                          index,
                          "description",
                          event.target.value
                        )
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_started"
                      placeholder="date_started"
                      value={educationPlace.date_started || ""}
                      onChange={(event) =>
                        updateEducation(
                          index,
                          "date_started",
                          event.target.value
                        )
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_ended"
                      placeholder="date_ended"
                      value={educationPlace.date_ended || ""}
                      onChange={(event) =>
                        updateEducation(index, "date_ended", event.target.value)
                      }
                    />
                  </div>
                );
              })}
          </div>
          <div className="template3-bottom-headers">Key Skills</div>
          <div className="template3-skills">
            {keyskills &&
              keyskills.map((keySk, index) => {
                return toggle ? (
                  <div className="template1-skill" key={index}>
                    <div className="template1-place"> {keySk.name}</div>
                    {keySk.description}
                  </div>
                ) : (
                  <div>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="name"
                      placeholder="NAME"
                      value={keySk.name || ""}
                      onChange={(event) =>
                        updateSkill(index, "name", event.target.value)
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="description"
                      value={keySk.description || ""}
                      placeholder="DESCRIPTION"
                      onChange={(event) =>
                        updateSkill(index, "description", event.target.value)
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="template3-header-container">
          <div className="template3-name">
            {" "}
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
          <div className="template3-contact-container">
            <div className="template3-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}📧
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
            <div className="template3-phone">
              📱{" "}
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
      </div>
      <button onClick={() => printDocument()}>Print</button>
      <br />
      {toggle ? (
        <button onClick={() => toggleClicked()}>Edit</button>
      ) : (
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      )}
    </div>
  );
}

export default Template3;
