import React from "react";

import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.error);
  const success = useSelector((state) => state.success);
  let classAdd = error.message ? "bg_error" : "";
  let message = error.message ? error.message : "";
  if (success.message) {
    classAdd = success.message ? "bg_success" : "";
    message = success.message;
  }

  return (
    <>
      <div className={`ERRORSUCCESS ${classAdd}`}>
        <h3>{message}</h3>
      </div>
    </>
  );
};

export default Error;
