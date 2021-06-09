import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signIn, signUp } from "./../../actions/authAction";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignIn) {
      const postData = { email: formData.email, password: formData.password };
      dispatch(signIn(postData, history));
      return;
    }
    dispatch(signUp(formData, history));
  };

  return (
    <div className="container auth_form">
      {!isSignIn && (
        <div className="auth_form_item">
          <label>Name</label>
          <input
            name="name"
            type="name"
            placeholder="eg. John Doe"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </div>
      )}
      <div className="auth_form_item">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="eg. name@example.com"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="auth_form_item">
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="**********"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
      </div>
      {!isSignIn && (
        <div className="auth_form_item">
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            type="password"
            placeholder="**********"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          ></input>
        </div>
      )}
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={handleSubmit}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <button
        className="auth_form_switch"
        onClick={() => setIsSignIn((prevIsSignIn) => !prevIsSignIn)}
      >
        {isSignIn
          ? "Don't have an account ? Sign Up"
          : "Already have and account ? Sign In"}
      </button>
    </div>
  );
};

export default AuthForm;
