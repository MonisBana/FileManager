/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
// import Logo from "/static/image/logo.png";
import classes from "./AuthPage.module.css";
// import bg from "/static/image/bg-4.jpg";

export function AuthPage() {
  return (
    <>
      <div className={classes.root}>
        {/*begin::Login*/}
        <div className={classes.login} id="kt_login">
          {/*begin::Aside*/}
          <div
            className={classes.login_aside}
            style={{
              backgroundImage: "url('/static/image/bg-4.jpg')",
            }}
          >
            {/*begin: Aside Container*/}
            <div className={classes.aside_container}>
              {/* start:: Aside header */}
              <Link to="/" className={classes.logo}>
                {/* <img alt="Logo" className={classes.logo_img} src={Logo} /> */}
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className={classes.aside_content}>
                <h3 className={classes.aside_title}>File Manager!</h3>
                <p className={classes.aside_text}>
                  Manage your files efficiently and easily with file manager
                </p>
              </div>
              {/* end:: Aside content */}
              {/* start:: Aside footer for desktop */}
              <div className={classes.footer}>
                <div className={classes.file_manager}>
                  &copy; 2020 File Manager
                </div>
                <div className={classes.flex}>
                  <Link to="/terms" className={classes.white}>
                    Privacy
                  </Link>
                  <Link to="/terms" className={classes.white_ml}>
                    Social
                  </Link>
                  <Link to="/terms" className={classes.white_ml}>
                    Contact
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className={classes.content}>
            {/*begin::Content header*/}
            <div className={classes.content_header}>
              <span>Don't have an account yet?</span>
              <Link
                to="/auth/registration"
                className={classes.content_header_link}
                id="kt_login_signup"
              >
                Sign Up!
              </Link>
            </div>
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div className={classes.content_body}>
              <Switch>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/registration" component={Registration} />

                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
