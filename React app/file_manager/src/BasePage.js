import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import MyFiles from "./containers/MyFiles";

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Switch>
      {
        /* Redirect from root URL to /dashboard. */

        <Redirect exact from="/" to="/myfiles" />
      }
      <Route path="/myfiles" component={MyFiles} />
    </Switch>
  );
}
