import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../../redux/actions/auth";
import classes from "./Registration.module.css";

function Registration(props) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const onSubmit = (event) => {
    enableLoading();
    event.preventDefault();
    const body = {
      username,
      email,
      password1: password,
      password2: confirmpass,
    };
    props.register(body).catch(() => {
      disableLoading();
    });
  };

  return (
    <div className={classes.form} style={{ display: "block" }}>
      <div className={classes.head}>
        <h3>Sign Up</h3>
        <p>Enter your details to create your account</p>
      </div>

      <form onSubmit={onSubmit}>
        <div className={classes.form_group}>
          <label>Username</label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        {/* begin: Email */}
        <div className={classes.form_group}>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        {/* end: Email */}

        {/* begin: Password */}
        <div className={classes.form_group}>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        {/* end: Password */}

        {/* begin: Confirm Password */}
        <div className={classes.form_group}>
          <input
            placeholder="Confirm Password"
            type="password"
            name="changepassword"
            value={confirmpass}
            onChange={(event) => {
              setConfirmpass(event.target.value);
            }}
          />
        </div>
        {/* end: Confirm Password */}

        <div className={classes.submit_div}>
          <button type="submit" className={classes.submit_btn}>
            <span>Submit</span>
            {loading && <span className={classes.loader}></span>}
          </button>

          <Link to="/auth/login">
            <button type="button" className={classes.cancel_btn}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(Registration);
