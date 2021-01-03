import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import logo from "../../assets/newfang.svg";

function Header(props) {
  return (
    <div className={classes.header}>
      <img src={logo} alt="newFang" width="15%" height="100%" />
      <p style={{ paddingRight: "2rem" }} onClick={() => props.logout()}>
        Logout
      </p>
    </div>
  );
}
export default connect(null, { logout })(Header);
