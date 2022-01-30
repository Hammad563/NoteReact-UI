import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";

import "../index.css";
import { useAppState } from "../Appstate";

const Navbar = (props) => {
  const { state, dispatch } = useAppState();
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  const [userData, setData] = useState({ token: "", username: "" });

  useEffect(() => {
    setData(auth);
  }, [auth]);

  return (
    <div className="container">
      <header>
        <h1>Note Taking App</h1>

        <nav>
          <Link to="/">
            <div className="">Home</div>
          </Link>
          <Link to="/dashboard">
            <div className="">Dashboard</div>
          </Link>
          {userData ? (
            <Link to="/">
              <div
                onClick={() => {
                  dispatch({ type: "logout" });
                  props.history.push("/");
                }}
                className=""
              >
                Log out
              </div>
            </Link>
          ) : (
            <>
              <Link to="/auth/signup">
                <div className="">Sign Up</div>
              </Link>
              <Link to="/auth/login">
                <div className="">Log In</div>
              </Link>
            </>
          )}

          <button className="btnNavbar">
            <AiOutlineAlignRight></AiOutlineAlignRight>{" "}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
