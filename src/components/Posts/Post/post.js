import React from "react";
import profile from "../../../img/profile.jpg";
import { IconContext } from "react-icons";
import { FaTimes, FaCheck } from "react-icons/fa";

import "./style.css";

const post = () => {
  return (
    <div>
      <div className="post">
        <div className="post_box">
          <div className="post_box_image">
            <img src={profile} alt="PROFILE"></img>
          </div>
          <div className="post_box_textContent">
            <div>
              <div className="objective">
                <h3 className>Objective</h3>
                <span>Name of Objective</span>
              </div>

              <p className="post_box_text">
                This is the place for the text content. Here, the user can write
                about anything. The text will have some text limit as well. The
                user may also be able to like posts.
              </p>
            </div>

            <div className="post_box_textContent-add">
              <IconContext.Provider
                value={{
                  style: { fontSize: "30px", color: "#d63031" },
                }}
              >
                <FaTimes />
              </IconContext.Provider>
              <div>
                <span style={{ color: "#d63031" }}>Not Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
