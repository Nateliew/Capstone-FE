import React, { useState, MouseEvent, useEffect } from "react";
import "../styling/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Template() {
  const location = useLocation();
  const summary_user = location.state;
  const [userSummary, setUserSummary] = useState(summary_user);

  const [templateChoice, setTemplateChoice] = useState(0);

  const handleClick1 = (e: MouseEvent) => {
    setTemplateChoice(1);
  };
  const handleClick2 = (e: MouseEvent) => {
    setTemplateChoice(2);
  };
  const handleClick3 = (e: MouseEvent) => {
    setTemplateChoice(3);
  };

  return (
    <div className="template-big">
      <div className="template-ok">
        <div className="template-button-container">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template1-button"
              onClick={(e) => handleClick1(e)}
            >
              Template 1
            </button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template2-button"
              onClick={(e) => handleClick2(e)}
            >
              Template 2
            </button>
          </motion.a>
          <motion.a
            whileHover={{ rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template3-button"
              onClick={(e) => handleClick3(e)}
            >
              Template 3
            </button>
          </motion.a>
        </div>
        <Link
          to="/add-template"
          className="add-template-button"
          state={{ templateChoice: templateChoice, summary: userSummary }}
        >
          Add a Template
        </Link>
      </div>
    </div>
  );
}

export default Template;
