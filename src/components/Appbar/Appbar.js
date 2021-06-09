import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";

const Appbar = () => {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("myProfile")) {
  //     dispatch({
  //       type: "USER_EXISTS",
  //       payload: JSON.parse(localStorage.getItem("myProfile")),
  //     });
  //   }
  // }, []);

  const handleAuthBtn = () => {
    if (user) {
      dispatch({ type: "LOGOUT" });
    }
    history.push("/auth");
  };

  return (
    <nav>
      <div className="container">
        <ul className="nav_items">
          <li className="nav_items-item">
            <Link to="/" className="link">
              MY PROGRESS
            </Link>
          </li>

          {user ? (
            <li className="nav_items-item item-avatar">
              <span>{user.name.charAt(0)}</span>
            </li>
          ) : null}
          <li className="nav_items-item item-name">
            {user ? `Hi ${user.name}` : ""}
          </li>
          <li className="nav_items-item">
            <button className=" button" onClick={handleAuthBtn}>
              {user ? "SIGN OUT" : "SIGN IN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;
