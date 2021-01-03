import React, { Component } from "react";
import classes from "./Layout.module.css";
import Header from "../components/Header/Header";

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
