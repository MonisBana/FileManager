import React, { useState } from "react";
import { connect } from "react-redux";
import { login, loadUser } from "../../../redux/actions/auth";
import classes from "./Login.module.css";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const onSubmit = (event) => {
    enableLoading();
    event.preventDefault();
    const body = { username, password };
    props.login(body).catch(() => {
      disableLoading();
    });
  };

  return (
    <div className={classes.login_form}>
      {/* begin::Head */}
      <div className={classes.login_head}>
        <h3>Sign In</h3>
        <p>Enter your username and password</p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
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
        <div className={classes.form_group}>
          <label>Password</label>
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
        <div className={classes.submit_div}>
          <button type="submit">
            <span>Sign In</span>
            {/*loading && <span className={classes.loader}></span>*/}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login, loadUser })(Login);
