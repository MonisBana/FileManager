import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

function Header(props) {
  return (
    <div className={classes.header}>
      <img
        src="static/image/logo.png"
        alt="Logo"
        width="3%"
        height="3%"
        style={{
          margin: "0.4rem",
        }}
      />
      <h2>FILE MANAGER</h2>
      <p style={{ paddingRight: "2rem" }} onClick={() => props.logout()}>
        Logout
      </p>
    </div>
  );
}
export default connect(null, { logout })(Header);
