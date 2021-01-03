import React, { Component } from "react";
import { connect } from "react-redux";
import { getFiles, addFile } from "../redux/actions/files";
import { loadUser } from "../redux/actions/auth";
import FileItem from "../components/FileItem/FileItem";
import classes from "./MyFiles.module.css";
import _ from "lodash";
import GridItem from "../components/GridItem/GridItem";
import list_btn from "../assets/list.png";
import grid_btn from "../assets/grid.png";
import new_file_btn from "../assets/new file.png";
import new_folder_btn from "../assets/new folder.png";
import folder from "../assets/folder.png";

class MyFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: {},
      CWD: "",
      newName: "",
      newFile: false,
      newFolder: false,
      parentFolder: null,
      listGridToggle: true,
      navList: [
        {
          id: null,
          name: "root",
        },
      ],
    };
  }
  componentDidMount() {
    // this.props.loadUser();
    this.props.getFiles();
  }
  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  FileNameChange = (event) => {
    this.setState({ newFileName: event.target.value });
  };
  onFolderChange = (event) => {
    this.setState({ newFolderName: event.target.value });
  };

  upload() {
    const formData = new FormData();
    let parentFolder = this.state.parentFolder;
    if (parentFolder === null) {
      parentFolder = "";
    }
    if (this.state.newFile) {
      formData.append("file", this.state.selectedFile);
      formData.append("user", this.props.auth.user);
      formData.append(
        "name",
        this.state.newName + "." + this.state.selectedFile.name.split(".")[1]
      );
      formData.append("folder", false);
      formData.append("parent_folder", parentFolder);
      this.props
        .addFile(formData)
        .then(this.props.getFiles())
        .then(
          this.setState({
            newFile: !this.state.newFile,
            newName: "",
            selectedFile: null,
          })
        );
    } else {
      formData.append("user", this.props.auth.user);
      formData.append("name", this.state.newName);
      formData.append("folder", true);
      formData.append("parent_folder", parentFolder);
      this.props
        .addFile(formData)
        .then(this.props.getFiles())
        .then(
          this.setState({
            newFolder: !this.state.newFolder,
            newName: "",
          })
        );
    }
  }

  uploadFolder() {
    const formData = new FormData();

    this.props
      .addFile(formData)
      .then(this.props.getFiles())
      .then(this.setState({ newFolder: !this.state.newFolder }));
  }

  render() {
    let fileList = null;
    let gridList = null;
    let parentFolder = this.state.parentFolder;
    const folderClick = (parentFolderId) => {
      this.setState({ parentFolder: parentFolderId });
      const navList = [];
      let id, name;
      let parentId = parentFolderId;
      console.log(parentId);
      while (parentId != null) {
        id = this.props.files[parentId].id;
        name = this.props.files[parentId].name;
        console.log(name);
        navList.push({ id, name });
        parentId = this.props.files[parentId].parent_folder;
      }
      navList.push({
        id: null,
        name: "root",
      });
      this.setState({ navList });
    };

    if (this.props.files) {
      let Files = _.pickBy(this.props.files, function (val, key, obj) {
        return val.parent_folder === parentFolder;
      });
      Files = _.sortBy(Files, function (obj) {
        return !obj.folder;
      });
      console.log(Files);
      gridList = Files.map((file, index) => {
        return <GridItem file={file} key={file.id} folderClick={folderClick} />;
      });
      fileList = Files.map((file, index) => {
        return <FileItem file={file} key={file.id} folderClick={folderClick} />;
      });
    }

    let Upload = null;
    if (this.state.newFile || this.state.newFolder) {
      Upload = (
        <div className={classes.headerRow}>
          <input
            type="text"
            onChange={(e) => this.setState({ newName: e.target.value })}
            value={this.state.newName}
            placeholder={"Name"}
          />
          {this.state.newFile ? (
            <input type="file" onChange={this.onFileChange} />
          ) : null}

          <button onClick={this.upload.bind(this)} className={classes.btn}>
            Upload
          </button>
        </div>
      );
    }
    let folderUpload = null;
    if (this.state.newFolder) {
      folderUpload = (
        <div className={classes.headerRow}>
          <input
            type="text"
            onChange={this.onFolderChange}
            value={this.state.folderUpload}
            placeholder="Enter New Folder Name"
            style={{ marginInline: "0.5rem" }}
          />
          <button
            onClick={this.uploadFolder.bind(this)}
            className={classes.btn}
          >
            Upload
          </button>
        </div>
      );
    }
    return (
      <div>
        <div className={classes.subHeader}>
          <img
            src={folder}
            alt="Current directory"
            style={{ width: "2.25rem", padding: "0.2rem" }}
          />
          <h2
            style={{
              fontWeight: "500 !important",
              color: "#212121",
              marginLeft: "0.5rem",
            }}
          >
            {this.state.navList[0].name}
          </h2>
          <div className={classes.navItem}>
            {this.state.navList.map((dict) => {
              return (
                <p onClick={() => folderClick(dict.id)} key={dict.id}>
                  - {dict.name} {"  "}
                </p>
              );
            })}
          </div>
        </div>
        <div className={classes.btns_wrapper}>
          <div className={classes.toggle_wrapper}>
            <input
              type="image"
              src={list_btn}
              alt="list Btn"
              className={classes.toggle_btn}
              onClick={() =>
                this.setState({ listGridToggle: !this.state.listGridToggle })
              }
              disabled={this.state.listGridToggle}
            />
            <input
              type="image"
              src={grid_btn}
              alt="grid Btn"
              className={classes.toggle_btn}
              onClick={() =>
                this.setState({ listGridToggle: !this.state.listGridToggle })
              }
              disabled={!this.state.listGridToggle}
            />
          </div>
          <div className={classes.btn_wrapper}>
            <button
              className={classes.btn}
              onClick={() => {
                this.setState({
                  newFolder: !this.state.newFolder,
                  newFile: false,
                });
              }}
            >
              <div className={classes.btn_container}>
                <img
                  src={new_folder_btn}
                  width="30"
                  height="30"
                  alt="New Folder"
                />
              </div>
              <span>New Folder</span>
            </button>
            <button
              className={classes.btn}
              onClick={() => {
                this.setState({ newFile: !this.state.newFile });
              }}
            >
              <div className={classes.btn_container}>
                <img src={new_file_btn} width="30" height="30" alt="New File" />
              </div>
              <span>New File</span>
            </button>
          </div>
        </div>
        {this.state.listGridToggle ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "0.1rem",
            }}
          >
            <div className={classes.headerRow}>
              <h4 className={classes.file_type_img}>Type</h4>
              <h4 className={classes.file_name}>Name</h4>
              <h4 className={classes.file_user}>User</h4>
              <h4 className={classes.file_date}>Date</h4>
            </div>
          </div>
        ) : null}
        <div className={classes.myFiles}>
          {Upload}
          {this.state.listGridToggle ? (
            fileList
          ) : (
            <div className={classes.gridWrapper}>{gridList}</div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  files: state.files,
  auth: state.auth,
});
export default connect(mapStateToProps, { getFiles, addFile, loadUser })(
  MyFiles
);
