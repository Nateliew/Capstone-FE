import { ChangeEvent } from "react";
import { currUser } from "../types";
import Work from "./work";

export default function InputForm({
  name,
  contact,
  email,
  education,
  skill,
  handleChange,
  handleSubmit,
  handleEducation,
  addFormFields,
  formValues,
  removeFormFields,
  handleSkill,
  allSkills,
  addSkillfields,
  removeSkills,
  workExperience,
  setWorkExperience,
}: currUser) {
  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              placeholder="grid-name"
            >
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="grid-name"
              type="text"
              placeholder="Test"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              placeholder="grid-contact"
            >
              Contact
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="grid-contact"
              type="text"
              placeholder="Test"
              name="contact"
              value={contact}
              onChange={handleChange}
            />

            <p className="text-gray-600 text-xs italic">Contact number here </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              placeholder="grid-email"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="grid-email"
              type="email"
              placeholder="example@example.com"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Education</h3>
            <hr />
          </div>
          <div>
            <>
              {formValues.map((element: any, index) => (
                <div className="form-inline" key={index}>
                  <form>
                    <div className="flex flex-col p-5 w-full">
                      <div className="col-lg-12 text-left">
                        <h3>
                          <b>
                            <i className="fas fa-check-circle mr-1"></i>1
                          </b>
                        </h3>
                      </div>
                      <div className="col-lg-4 text-left">
                        <label>Institute/Organisation*</label>
                        <input
                          className=" text-gray-700 font-bold"
                          type="text"
                          name="place"
                          onChange={(event) => handleEducation(index, event)}
                        />
                      </div>
                      <div className="col-lg-4 text-left">
                        <label>Start Date</label>
                        <input
                          className=" text-gray-700 font-bold"
                          type="text"
                          name="date_started"
                          onChange={(event) => handleEducation(index, event)}
                        />
                      </div>
                      <div className="col-lg-4 text-left">
                        <label>End Date*</label>
                        <input
                          className=" text-gray-700 font-bold"
                          type="text"
                          name="date_ended"
                          onChange={(event) => handleEducation(index, event)}
                        />
                      </div>
                      <div className="col-lg-4 text-left">
                        <label>Description*</label>
                        <input
                          className=" text-gray-700 font-bold"
                          type="text"
                          name="description"
                          onChange={(event) => handleEducation(index, event)}
                        />
                      </div>
                    </div>
                  </form>
                  {index ? (
                    <button
                      type="button"
                      className="button remove"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              ))}
              <button
                className="button add"
                type="button"
                onClick={(e: any) => addFormFields(e)}
              >
                Add
              </button>
              <br />
              <br />
            </>
          </div>
          <div>
            {/* Skills */}
            {/* <div className="flex flex-col p-5 w-full">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  placeholder="grid-work"
                >
                  Skills{" "}
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add skills"
                  name="skill"
                  value={skill}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4 text-left">
                <label>Description</label>
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <button>Add</button>
            </div> */}
            {/* Skills */}
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Skills</h3>
              <hr />
            </div>
            <div>
              <>
                {allSkills.map((element: any, index) => (
                  <div className="form-inline" key={index}>
                    <form>
                      <div className="flex flex-col p-5 w-full">
                        <div className="col-lg-12 text-left">
                          <h3>
                            <b>
                              <i className="fas fa-check-circle mr-1"></i>2
                            </b>
                          </h3>
                        </div>
                        <div className="col-lg-4 text-left">
                          <label>Skills*</label>
                          <input
                            className=" text-gray-700 font-bold"
                            type="text"
                            name="skills"
                            onChange={(event) => handleSkill(index, event)}
                          />
                        </div>
                        <div className="col-lg-4 text-left">
                          <label>Description*</label>
                          <input
                            className=" text-gray-700 font-bold"
                            type="text"
                            name="skilldes"
                            onChange={(event) => handleSkill(index, event)}
                          />
                        </div>
                      </div>
                    </form>
                    {index ? (
                      <button
                        type="button"
                        className="button remove"
                        onClick={() => removeSkills(index)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                ))}
                <button
                  className="button add"
                  type="button"
                  onClick={(e: any) => addSkillfields(e)}
                >
                  Add
                </button>
                <br />
                <br />
              </>
            </div>
          </div>
          <button
            type="submit"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Submit
          </button>
        </div>
        <Work
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      </form>
    </div>
  );
}