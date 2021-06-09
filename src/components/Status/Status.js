import React from "react";

const Status = () => {
  return (
    <div className="container status_container ">
      <div className="status_box">
        <label>
          Objective:
          <input name="objective" type="text"></input>
        </label>

        <input
          className="status_input"
          type="text"
          name="status"
          placeholder="Post A Milestone"
        ></input>
        <a href="#" className="button status_button">
          POST
        </a>
      </div>
    </div>
  );
};

export default Status;
