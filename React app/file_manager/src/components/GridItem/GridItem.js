import React, { Component } from "react";
import classes from "./GridItem.module.css";
import folder from "../../assets/folder.png";

export class GridItem extends Component {
  render() {
    let filetype = null;

    if (this.props.file.folder === false) {
      filetype =
        process.env.PUBLIC_URL +
        "/image/" +
        this.props.file.name.split(".")[1] +
        ".png";
    }

    return (
      <div
        className={classes.file_item}
        onClick={() => this.props.folderClick(this.props.file.id)}
      >
        {this.props.file.folder === true ? (
          <img
            src={folder}
            alt={this.props.file.name}
            className={classes.file_type_img}
          />
        ) : (
          <img
            src={filetype}
            alt={this.props.file.name}
            className={classes.file_type_img}
          />
        )}

        <p className={classes.file_name}>
          {this.props.file.name.split(".")[0]}
        </p>
      </div>
    );
  }
}

export default GridItem;
