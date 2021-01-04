(this.webpackJsonpfile_manager = this.webpackJsonpfile_manager || []).push([
  [0],
  {
    16: function (e, t, a) {
      e.exports = {
        file_item: "FileItem_file_item__1nVOW",
        file_type_img: "FileItem_file_type_img__2OVZd",
        file_name: "FileItem_file_name__2_0l_",
        file_user: "FileItem_file_user__Dlwwt",
        file_date: "FileItem_file_date__1rAQQ",
        delete_btn: "FileItem_delete_btn__ZNXnF",
        next_btn: "FileItem_next_btn__32efB",
        dummy_btn: "FileItem_dummy_btn__EMpG3",
      };
    },
    18: function (e, t, a) {
      e.exports = {
        form: "Registration_form__15BZi",
        head: "Registration_head__1cxgd",
        form_group: "Registration_form_group__3-CXs",
        submit_div: "Registration_submit_div__2nl2w",
        submit_btn: "Registration_submit_btn__2QiiO",
        cancel_btn: "Registration_cancel_btn__WUibY",
      };
    },
    26: function (e, t, a) {
      e.exports = {
        login_form: "Login_login_form__D1HD0",
        login_head: "Login_login_head__1k_5J",
        form_group: "Login_form_group__acOkg",
        submit_div: "Login_submit_div__4GEwo",
        loader: "Login_loader__3aoPa",
        spin: "Login_spin__1pNId",
      };
    },
    29: function (e, t, a) {
      e.exports = {
        file_item: "GridItem_file_item__45exW",
        file_type_img: "GridItem_file_type_img__M7BHB",
        file_name: "GridItem_file_name__3you_",
      };
    },
    4: function (e, t, a) {
      e.exports = {
        myFiles: "MyFiles_myFiles__3ANSV",
        gridWrapper: "MyFiles_gridWrapper__3DVPk",
        subHeader: "MyFiles_subHeader__2b3ks",
        navItem: "MyFiles_navItem__30VjP",
        btn_wrapper: "MyFiles_btn_wrapper__1NA3u",
        btn: "MyFiles_btn__23Xas",
        btn_container: "MyFiles_btn_container__30LDu",
        headerRow: "MyFiles_headerRow__1l5eE",
        file_type_img: "MyFiles_file_type_img__1hVfm",
        file_name: "MyFiles_file_name__2pSYJ",
        file_user: "MyFiles_file_user__2RYLx",
        file_date: "MyFiles_file_date__3-zth",
        toggle_wrapper: "MyFiles_toggle_wrapper__Zkb15",
        toggle_btn: "MyFiles_toggle_btn__3Y-dq",
        btns_wrapper: "MyFiles_btns_wrapper__hcp78",
      };
    },
    51: function (e, t, a) {
      e.exports = { Content: "Layout_Content__3QwaI" };
    },
    52: function (e, t, a) {
      e.exports = { header: "Header_header__1HjaM" };
    },
    6: function (e, t, a) {
      e.exports = {
        root: "AuthPage_root__3Lp4o",
        login: "AuthPage_login__2as3j",
        login_aside: "AuthPage_login_aside__NGLUw",
        aside_container: "AuthPage_aside_container__Y9hkc",
        logo: "AuthPage_logo__kqDbr",
        logo_img: "AuthPage_logo_img__1dTKY",
        aside_content: "AuthPage_aside_content__F5q7A",
        aside_title: "AuthPage_aside_title__Tno4-",
        aside_text: "AuthPage_aside_text__6J3dy",
        content: "AuthPage_content__2gQ1T",
        content_header: "AuthPage_content_header__AM4Ry",
        content_header_link: "AuthPage_content_header_link__2dRqs",
        content_body: "AuthPage_content_body__24hgh",
        footer: "AuthPage_footer__1qDe9",
        file_manager: "AuthPage_file_manager__2NvGx",
        flex: "AuthPage_flex__3180Z",
        white: "AuthPage_white__1dcEX",
        white_ml: "AuthPage_white_ml__1lDCX",
      };
    },
    60: function (e, t, a) {},
    61: function (e, t, a) {},
    86: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a(1),
        i = a.n(s),
        r = a(30),
        c = a.n(r),
        l = (a(60), a(61), a(13)),
        A = a(5),
        o = a(7),
        u = a(54),
        d = a(40),
        g = a(53),
        p = a(3),
        h = a.n(p),
        m = a(9),
        b = a(11),
        j = "USER_LOADING",
        f = "USER_LOADED",
        O = "AUTH_ERROR",
        B = "REGISTER_SUCCESS",
        w = "REGISTER_FAIL",
        x = "LOGIN_SUCCESS",
        v = "LOGIN_FAIL",
        y = "LOGOUT_SUCCESS",
        C = "GET_FILES",
        E = "GET_FILE",
        N = "ADD_FILE",
        F = "DELETE_FILE",
        _ = "EDIT_FILE",
        I = "CLEAR_FILES",
        S = {
          isLoading: !1,
          isAuthenticated: null,
          user: null,
          token: localStorage.getItem("token"),
        },
        Q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : S,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case j:
              return Object(b.a)(Object(b.a)({}, e), {}, { isLoading: !0 });
            case f:
              return Object(b.a)(
                Object(b.a)({}, e),
                {},
                { isLoading: !1, isAuthenticated: !0, user: t.payload }
              );
            case B:
            case x:
              return (
                localStorage.setItem("token", t.payload.token),
                Object(b.a)(
                  Object(b.a)({}, e),
                  {},
                  { isLoading: !1, isAuthenticated: !0 },
                  t.payload
                )
              );
            case O:
            case w:
            case v:
            case y:
              return (
                localStorage.removeItem("token"),
                Object(b.a)(
                  Object(b.a)({}, e),
                  {},
                  {
                    isLoading: !1,
                    isAuthenticated: !1,
                    user: null,
                    token: null,
                  }
                )
              );
            default:
              return e;
          }
        },
        k = a(33),
        L = a(25),
        H = a.n(L),
        G = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case C:
              return Object(b.a)(
                Object(b.a)({}, e),
                H.a.mapKeys(t.payload.results, "id")
              );
            case E:
            case N:
            case _:
              return Object(b.a)(
                Object(b.a)({}, e),
                {},
                Object(k.a)({}, t.payload.id, t.payload)
              );
            case F:
              return H.a.omit(e, t.payload);
            case I:
              return {};
            default:
              return e;
          }
        },
        D = h.a.mark(P),
        R = Object(m.c)({ auth: Q, files: G });
      function P() {
        return h.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
              case "end":
                return e.stop();
            }
        }, D);
      }
      var U = Object(g.a)(),
        M = [].concat(
          Object(u.a)(
            Object(d.b)({
              immutableCheck: !1,
              serializableCheck: !1,
              thunk: !0,
            })
          ),
          [U]
        ),
        Y = Object(d.a)({ reducer: R, middleware: M, devTools: !1 });
      U.run(P);
      var J = Y,
        T = a(19),
        z = a(20),
        X = a(22),
        W = a(21),
        Z = a(17),
        K = a(50),
        V = a.n(K).a.create({ baseURL: "http://18.219.77.183:8000/api/" }),
        q = a(10),
        $ = Object(q.a)(),
        ee = function () {
          return (function () {
            var e = Object(Z.a)(
              h.a.mark(function e(t, a) {
                var n;
                return h.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t({ type: j }),
                            (e.prev = 1),
                            (e.next = 4),
                            V.get("/me/", ae(a))
                          );
                        case 4:
                          (n = e.sent),
                            t({ type: f, payload: n.data }),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1)), t({ type: O });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })();
        },
        te = function () {
          return (function () {
            var e = Object(Z.a)(
              h.a.mark(function e(t, a) {
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          V.post("/rest-auth/logout/", null, ae(a))
                        );
                      case 2:
                        t({ type: y }), t({ type: I });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })();
        },
        ae = function (e) {
          var t = e().auth.key,
            a = { headers: { "Content-Type": "application/json" } };
          return t && (a.headers.Authorization = "Token ".concat(t)), a;
        },
        ne = function (e) {
          var t = e().auth.key;
          return { headers: { Authorization: "Token ".concat(t) } };
        },
        se = a(16),
        ie = a.n(se),
        re =
          "data:image/png;base64,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",
        ce = (function (e) {
          Object(X.a)(a, e);
          var t = Object(W.a)(a);
          function a(e) {
            var n;
            return (
              Object(T.a)(this, a),
              ((n = t.call(this, e)).state = {
                editToggle: !1,
                filename: n.props.file.name,
              }),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = null,
                    a = null;
                  !0 === this.props.file.folder
                    ? (a = Object(n.jsx)("input", {
                        type: "image",
                        src:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABBnAAAQZwGu0OuYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIpQTFRF////AP8AVapVVaqARrl0VbZtUrZtUbxwULptT7lxT7tvTrluTrlwULlvULtwULtwT7tvTrpvT7tuULlwT7puTrtvT7luT7tvT7tuTrpvT7pvT7tvT7pvT7lvT7tvT7pvT7pvT7pvT7pvVLxzV712Wb53fcyVg8+amNerrN+7u+TI1O7b1u/d////bRPw7QAAACJ0Uk5TAAEDBgsVHDlGTVpfYmNpcIqMpLCys7u+wsPO2N7n8vf4/dJJ2CUAAAFdSURBVFjDrZfZdoJAEEQLBRVUNhUCyNZmT/z/38tDlqNxYGYo67Wpe84w3T3dwIBcP4rTvGqaKk/jyHdhJW+zb+VK7X7jmbrnYdGLQv1DODewO8FRBnUMHJ1/VcqoytWofZGJVtli2L+sxUD1csi/7sRI3VppnyVirGSm8O/EQrtbQiJWSm7OL5b69x+WnS2gu7qLRS3Wqi/zIZMJyi7yVybpL6sdZf4/vZw0gPK3sgJl+P38+aghBD/1r67f17OWcPzuD+FA+E1PCAEAhUwmFADg9TKZ0HsAtiMfaAlbAAchCAfAbYUgtC58zV1rCD4ioQgRYqEIMVKhCClyoQg5KjEjfKgjFRoxJDwrAw0PoI9A/0T6GulEolOZLia6nOmGwrc0uqnSbZ1/WOinjX5c+eedHjD4EYcfsugxjx80+VGXH7bpcZ9fOO6w8vBLF7/23WHx5FffOyzfduv/F4uirDYLkMPTAAAAAElFTkSuQmCC",
                        alt: "Next",
                        className: ie.a.next_btn,
                        onClick: function () {
                          return e.props.folderClick(e.props.file.id);
                        },
                      }))
                    : ((t =
                        "/file_manager/image/" +
                        this.props.file.name.split(".")[1] +
                        ".png"),
                      (a = Object(n.jsx)("div", {
                        className: ie.a.dummy_btn,
                      })));
                  var s = Object(n.jsx)("p", {
                      className: ie.a.file_name,
                      children: this.props.file.name.split(".")[0],
                    }),
                    i = Object(n.jsx)("input", {
                      type: "text",
                      className: ie.a.file_name,
                      value: this.state.filename,
                      onChange: function (t) {
                        return e.setState({ filename: t.target.value });
                      },
                    }),
                    r = Object(n.jsx)("input", {
                      type: "image",
                      src:
                        "data:image/png;base64,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",
                      alt: "edit Btn",
                      className: ie.a.delete_btn,
                      onClick: function () {
                        return e.setState({ editToggle: !e.state.editToggle });
                      },
                    }),
                    c = Object(n.jsx)("input", {
                      type: "image",
                      src:
                        "data:image/png;base64,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",
                      alt: "done Btn",
                      className: ie.a.delete_btn,
                      onClick: function () {
                        var t = {};
                        (t.name = e.state.filename),
                          e.props.editFile(e.props.file.id, t),
                          e.setState({ editToggle: !e.state.editToggle });
                      },
                    });
                  return Object(n.jsxs)("div", {
                    className: ie.a.file_item,
                    children: [
                      !0 === this.props.file.folder
                        ? Object(n.jsx)("img", {
                            src: re,
                            alt: this.props.file.name,
                            className: ie.a.file_type_img,
                          })
                        : Object(n.jsx)("img", {
                            src: t,
                            alt: this.props.file.name,
                            className: ie.a.file_type_img,
                          }),
                      this.state.editToggle ? i : s,
                      Object(n.jsx)("p", {
                        className: ie.a.file_user,
                        children: this.props.file.user.username,
                      }),
                      Object(n.jsx)("p", {
                        className: ie.a.file_date,
                        children: new Date(
                          this.props.file.created_date
                        ).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }),
                      }),
                      this.state.editToggle ? c : r,
                      Object(n.jsx)("input", {
                        type: "image",
                        src:
                          "data:image/png;base64,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",
                        alt: "delete Btn",
                        className: ie.a.delete_btn,
                        onClick: function () {
                          return e.props.deleteFile(e.props.file.id);
                        },
                      }),
                      a,
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.Component),
        le = Object(o.b)(null, {
          deleteFile: function (e) {
            return (function () {
              var t = Object(Z.a)(
                h.a.mark(function t(a, n) {
                  return h.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            V.delete("/file_folder/".concat(e, "/"), ae(n))
                          );
                        case 2:
                          a({ type: F, payload: e }), $.push("/");
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, a) {
                return t.apply(this, arguments);
              };
            })();
          },
          editFile: function (e, t) {
            return (function () {
              var a = Object(Z.a)(
                h.a.mark(function a(n, s) {
                  var i;
                  return h.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.next = 2),
                            V.put("/file_folder/".concat(e, "/"), t, ae(s))
                          );
                        case 2:
                          (i = a.sent),
                            n({ type: _, payload: i.data }),
                            $.push("/");
                        case 5:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              );
              return function (e, t) {
                return a.apply(this, arguments);
              };
            })();
          },
          getFile: function (e) {
            return (function () {
              var t = Object(Z.a)(
                h.a.mark(function t(a, n) {
                  var s;
                  return h.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            V.get("/file_folder/".concat(e, "/"), ae(n))
                          );
                        case 2:
                          (s = t.sent), a({ type: E, payload: s.data });
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, a) {
                return t.apply(this, arguments);
              };
            })();
          },
        })(ce),
        Ae = a(4),
        oe = a.n(Ae),
        ue = a(29),
        de = a.n(ue),
        ge = (function (e) {
          Object(X.a)(a, e);
          var t = Object(W.a)(a);
          function a() {
            return Object(T.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = null;
                  return (
                    !1 === this.props.file.folder &&
                      (t =
                        "/file_manager/image/" +
                        this.props.file.name.split(".")[1] +
                        ".png"),
                    Object(n.jsxs)("div", {
                      className: de.a.file_item,
                      onClick: function () {
                        return e.props.folderClick(e.props.file.id);
                      },
                      children: [
                        !0 === this.props.file.folder
                          ? Object(n.jsx)("img", {
                              src: re,
                              alt: this.props.file.name,
                              className: de.a.file_type_img,
                            })
                          : Object(n.jsx)("img", {
                              src: t,
                              alt: this.props.file.name,
                              className: de.a.file_type_img,
                            }),
                        Object(n.jsx)("p", {
                          className: de.a.file_name,
                          children: this.props.file.name.split(".")[0],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            a
          );
        })(s.Component),
        pe = (function (e) {
          Object(X.a)(a, e);
          var t = Object(W.a)(a);
          function a(e) {
            var n;
            return (
              Object(T.a)(this, a),
              ((n = t.call(this, e)).onFileChange = function (e) {
                n.setState({ selectedFile: e.target.files[0] });
              }),
              (n.FileNameChange = function (e) {
                n.setState({ newFileName: e.target.value });
              }),
              (n.onFolderChange = function (e) {
                n.setState({ newFolderName: e.target.value });
              }),
              (n.state = {
                selectedFile: {},
                CWD: "",
                newName: "",
                newFile: !1,
                newFolder: !1,
                parentFolder: null,
                listGridToggle: !0,
                navList: [{ id: null, name: "root" }],
              }),
              n
            );
          }
          return (
            Object(z.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getFiles();
                },
              },
              {
                key: "upload",
                value: function () {
                  var e = new FormData(),
                    t = this.state.parentFolder;
                  null === t && (t = ""),
                    this.state.newFile
                      ? (e.append("file", this.state.selectedFile),
                        e.append("user", this.props.auth.user),
                        e.append(
                          "name",
                          this.state.newName +
                            "." +
                            this.state.selectedFile.name.split(".")[1]
                        ),
                        e.append("folder", !1),
                        e.append("parent_folder", t),
                        this.props
                          .addFile(e)
                          .then(this.props.getFiles())
                          .then(
                            this.setState({
                              newFile: !this.state.newFile,
                              newName: "",
                              selectedFile: null,
                            })
                          ))
                      : (e.append("user", this.props.auth.user),
                        e.append("name", this.state.newName),
                        e.append("folder", !0),
                        e.append("parent_folder", t),
                        this.props
                          .addFile(e)
                          .then(this.props.getFiles())
                          .then(
                            this.setState({
                              newFolder: !this.state.newFolder,
                              newName: "",
                            })
                          ));
                },
              },
              {
                key: "uploadFolder",
                value: function () {
                  var e = new FormData();
                  this.props
                    .addFile(e)
                    .then(this.props.getFiles())
                    .then(this.setState({ newFolder: !this.state.newFolder }));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = null,
                    a = null,
                    s = this.state.parentFolder,
                    i = function (t) {
                      e.setState({ parentFolder: t });
                      var a,
                        n,
                        s = [],
                        i = t;
                      for (console.log(i); null != i; )
                        (a = e.props.files[i].id),
                          (n = e.props.files[i].name),
                          console.log(n),
                          s.push({ id: a, name: n }),
                          (i = e.props.files[i].parent_folder);
                      s.push({ id: null, name: "root" }),
                        e.setState({ navList: s });
                    };
                  if (this.props.files) {
                    var r = H.a.pickBy(this.props.files, function (e, t, a) {
                      return e.parent_folder === s;
                    });
                    (r = H.a.sortBy(r, function (e) {
                      return !e.folder;
                    })),
                      console.log(r),
                      (a = r.map(function (e, t) {
                        return Object(n.jsx)(
                          ge,
                          { file: e, folderClick: i },
                          e.id
                        );
                      })),
                      (t = r.map(function (e, t) {
                        return Object(n.jsx)(
                          le,
                          { file: e, folderClick: i },
                          e.id
                        );
                      }));
                  }
                  var c = null;
                  (this.state.newFile || this.state.newFolder) &&
                    (c = Object(n.jsxs)("div", {
                      className: oe.a.headerRow,
                      children: [
                        Object(n.jsx)("input", {
                          type: "text",
                          onChange: function (t) {
                            return e.setState({ newName: t.target.value });
                          },
                          value: this.state.newName,
                          placeholder: "Name",
                        }),
                        this.state.newFile
                          ? Object(n.jsx)("input", {
                              type: "file",
                              onChange: this.onFileChange,
                            })
                          : null,
                        Object(n.jsx)("button", {
                          onClick: this.upload.bind(this),
                          className: oe.a.btn,
                          children: "Upload",
                        }),
                      ],
                    }));
                  return (
                    this.state.newFolder &&
                      Object(n.jsxs)("div", {
                        className: oe.a.headerRow,
                        children: [
                          Object(n.jsx)("input", {
                            type: "text",
                            onChange: this.onFolderChange,
                            value: this.state.folderUpload,
                            placeholder: "Enter New Folder Name",
                            style: { marginInline: "0.5rem" },
                          }),
                          Object(n.jsx)("button", {
                            onClick: this.uploadFolder.bind(this),
                            className: oe.a.btn,
                            children: "Upload",
                          }),
                        ],
                      }),
                    Object(n.jsxs)("div", {
                      children: [
                        Object(n.jsxs)("div", {
                          className: oe.a.subHeader,
                          children: [
                            Object(n.jsx)("img", {
                              src: re,
                              alt: "Current directory",
                              style: { width: "2.25rem", padding: "0.2rem" },
                            }),
                            Object(n.jsx)("h2", {
                              style: {
                                fontWeight: "500 !important",
                                color: "#212121",
                                marginLeft: "0.5rem",
                              },
                              children: this.state.navList[0].name,
                            }),
                            Object(n.jsx)("div", {
                              className: oe.a.navItem,
                              children: this.state.navList.map(function (e) {
                                return Object(n.jsxs)(
                                  "p",
                                  {
                                    onClick: function () {
                                      return i(e.id);
                                    },
                                    children: ["- ", e.name, " ", "  "],
                                  },
                                  e.id
                                );
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)("div", {
                          className: oe.a.btns_wrapper,
                          children: [
                            Object(n.jsxs)("div", {
                              className: oe.a.toggle_wrapper,
                              children: [
                                Object(n.jsx)("input", {
                                  type: "image",
                                  src:
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF/SURBVHic7dmxTsJQGAXgcy/Y0iAOJgyGxZEX0NmEid34DsaJzSfA2Zi4uhtnXJq4+xwNLo5AKa39nZEbI7blRznf2Js2p6dhIMcMX967WTwNs0XSEQjK0Dpsw2s0S3kWgDcB7gan/o3r8Oxh3E1ncShZ0hFZzR+0j123TWHwnOPj0mbxNEwX89JevgJHBhjeviYXrsN0Fod5One+/DeaEJxbqd3bbJF0yslZLQH6zutZofx9u8VffpmB8ze15pf/at8Wufs/YAHaAbSxAO0A2liAdgBtLEA7gDZrYLQz/Ixg4rpsTKH8E1v3GlGRJ2yKGIycB57/+/wiI1tvBb09L4hg7bb+KRhDcD048Z9ch7Z20DN+I4JZK/8EIo+5za9KykhERER/kOEuwF2Au0CB+zeIu0A1WIB2AG0sQDuANhagHUAbC9AOoI27AHcB7gJERES0o7gLcBfgLrC1X34Zd4FqsADtANpYgHYAbSxAO4A2FqAdQBt3Ae4CO74LfALJVhQHlCQHqQAAAABJRU5ErkJggg==",
                                  alt: "list Btn",
                                  className: oe.a.toggle_btn,
                                  onClick: function () {
                                    return e.setState({
                                      listGridToggle: !e.state.listGridToggle,
                                    });
                                  },
                                  disabled: this.state.listGridToggle,
                                }),
                                Object(n.jsx)("input", {
                                  type: "image",
                                  src:
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJySURBVHic7ZmxaxNhGIef9+NCpkb8DzI5FERpu9SYWRJQW+jg1D26mNG/QJzqUrN3celQW0jpHGOXJFgKGZyyCoIacCip9zrEnE2qSC5HXu19z/beXX557pfcd3AnqkrEYTnLeb+CSgF0BcgzDUKV+29fRnNN3qPcmipjPO+Eit6O5oO7T1G2YiT1QFqINglyNUr1s9EOFx2yV1xm0O8Mv0A3mPbk/23yoBsoWwz6HfaKy6MdwwL2iss4PQYWjQTnySJOj0clOA7LWZzuABljsXmSwekOh+Ws47xfIR2//CSLnPcrbrjgpRSVgvu52qcUXXFcrdV+WvLu78dcbXwB1gLW+AKsBazxBVgLWOMLsBawxhdgLWBNAHxMLE312/jMp5nyh5+fyJfkfAEZeyaYQlJ/CaS+gIBteZRgXocn+iGa3ty5h8j12Gmqn3n47iiat+UGsDSL4CQBwuvE0pQq8KsAcS9glvcCcgIcXdhSRmK9F/gjqb8EfAHWAtb4AqwFrPEFWAtY4wuwFrDGF2AtYI0vwFrAGl+AtYA1AcJ6YmnfOZ3YUsW5a7HzwvDr+MwBAb3Yeb/BPxS1FrAm9QUE7Be/JBcXPuNBsxaNr6QB3Jwh8JTHWoym/UIF3PMZ8i4RgMZfpCYRyY7PLKDEzxcWLuVrgr74S8AX4AuwFrDGF2AtYI0vwFrAGl+AtYA1vgBI9gHDf0bPgbSsLeyQlkO0aa1hhmjTEeRqQNfaxYAuQa7mKNXPCGUTGFgbzZEBoWxSqp8N7wJrjTahrJKOf0KXUFZZa7Th4m1wrdEmk1tCqILscrXuDj2QXYQqmdzS6OQBfgAmWJpYvEjgKwAAAABJRU5ErkJggg==",
                                  alt: "grid Btn",
                                  className: oe.a.toggle_btn,
                                  onClick: function () {
                                    return e.setState({
                                      listGridToggle: !e.state.listGridToggle,
                                    });
                                  },
                                  disabled: !this.state.listGridToggle,
                                }),
                              ],
                            }),
                            Object(n.jsxs)("div", {
                              className: oe.a.btn_wrapper,
                              children: [
                                Object(n.jsxs)("button", {
                                  className: oe.a.btn,
                                  onClick: function () {
                                    e.setState({
                                      newFolder: !e.state.newFolder,
                                      newFile: !1,
                                    });
                                  },
                                  children: [
                                    Object(n.jsx)("div", {
                                      className: oe.a.btn_container,
                                      children: Object(n.jsx)("img", {
                                        src:
                                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARjSURBVHic7ZlbaBxVGMd/Z3Z2Zy8xV22SppLUkIiCUWObIBWhgnhBSYsirYiQt4LBd/XBB/skSpHaB8WHvqgoIsYLwduL2D54KQoVQRsqJs21SZrNZrOTyczxIcluEnezm2bOzhH39zTnnG/+37f/PedwZkbIn5H4jUGPuJsffddVgKFE1WVAia4C1BggOC5/oUWJts8IJUsAwONNJjlVNO7PtehyEeGqeI7UetNUmGoAj4Gi9qqZg4Vx6QfOqk9vAHFl6r6h1v8qpeq+oNaAMGApzbBr1K/AG5Rn2BXqDYiyOhM0pTx7sMZ7gbpzwEYkkC4wNro2Xi7CnMPi0nqzPAZsx2ig2ct+DNGOigFBFxA0FQOCLiBoKgYEXUDQVAwIuoCgqRgQdAFBUzEg6AKCpmJA0AUETcWAoAsImooBQRcQNBUDgi4gaP73Bqj8PK4GswpZ3Q3RFqS1h1QyTcidJrQ8TiRzEcNb3JmcojL9RZjIvcfxmp5E3ngYjGh2aPbvsVyYtImmzpFIfkHi2iCCleLSun8YkY1H8W49iUx05L99gwEbCdvD1E29Sjz55bb6+u4BhoXX9Q5u9wcFf/x2OFY7Uze/xXTLG0hR+Bu9ngZE6nF7vsJreXbXUou1fUy0vYsXqsk7rp8BwsS96z1k3b2+SdrxA0zvO4PMs+VpZ4B32+vIhgd8112quo+5phf/1a+VAbL2IF7rCWX6yYZ+7FjXpj6tDPA6TwJCYQbBXNNLm3q0OQfI2l5kw+GS4/uHP2fSSXHtgqQxFuP0PT0l3ZeJ92LH78RK/wpoNANk45EdxY8vLzC6vMCUnWEqs7Sje9NVD2evNTLg8bLlSlc/mL3WYwkY0aKHndmVJdJe7mjrbjjAehImlnKzIGaGqAlHCmo5VjtSRBByWQ8DpNVEsc3v1PgPDM79kXds2s5w7Px32fZDzXt54fY7tlETuOZNmM4VTZaA1Vj2lK65B9BlD3B39gjrB+uPzVosAWGPF405UNVMWOT+r6H5YRZdB4CYEeL+xtws6qqtK6oXWpkENDGA5dnVWRBKFAzpq+ukr64z2z6/MJo1oDoSLrLmN2N4ixju/Or1dZbsMxIx823ZskVTuQ1TEwNATHxatlzx5NfZaz2WAGBMfYbnzEM4/3P7Vp5v7iHtOcwuLZAIhUrP4yaJp77JtrUxAGcO4/JreJ2vlBT+aG07AKPN+V+JFaLm6hkMN5lta7MEAIy/TkNmRJm+6YxQPXN2cx/wtrKMpZGAtde3bprQxRP1bvfHj2BYvs5OIR23fuzlISHtmU39fibxixXbfkoK8T4lzNBCb4W34Eopjt3S0frR1gGtlsA6pmV9KAzjMWDeB7kFpHwi348HTQ0AME1zyJPyEHDhejUE/CQ8evd37B8sFKOtAQCWZf1mhsMHhZTPCBgu9T4BlxDy6db21p62zrbfi8T+N5BSCsdxuoWURxDiENAM7LsyMiakxwiCcQHfI/mkraOt5FnzD1vPQ0aKkn37AAAAAElFTkSuQmCC",
                                        width: "30",
                                        height: "30",
                                        alt: "New Folder",
                                      }),
                                    }),
                                    Object(n.jsx)("span", {
                                      children: "New Folder",
                                    }),
                                  ],
                                }),
                                Object(n.jsxs)("button", {
                                  className: oe.a.btn,
                                  onClick: function () {
                                    e.setState({ newFile: !e.state.newFile });
                                  },
                                  children: [
                                    Object(n.jsx)("div", {
                                      className: oe.a.btn_container,
                                      children: Object(n.jsx)("img", {
                                        src:
                                          "data:image/png;base64,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",
                                        width: "30",
                                        height: "30",
                                        alt: "New File",
                                      }),
                                    }),
                                    Object(n.jsx)("span", {
                                      children: "New File",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        this.state.listGridToggle
                          ? Object(n.jsx)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginBottom: "0.1rem",
                              },
                              children: Object(n.jsxs)("div", {
                                className: oe.a.headerRow,
                                children: [
                                  Object(n.jsx)("h4", {
                                    className: oe.a.file_type_img,
                                    children: "Type",
                                  }),
                                  Object(n.jsx)("h4", {
                                    className: oe.a.file_name,
                                    children: "Name",
                                  }),
                                  Object(n.jsx)("h4", {
                                    className: oe.a.file_user,
                                    children: "User",
                                  }),
                                  Object(n.jsx)("h4", {
                                    className: oe.a.file_date,
                                    children: "Date",
                                  }),
                                ],
                              }),
                            })
                          : null,
                        Object(n.jsxs)("div", {
                          className: oe.a.myFiles,
                          children: [
                            c,
                            this.state.listGridToggle
                              ? t
                              : Object(n.jsx)("div", {
                                  className: oe.a.gridWrapper,
                                  children: a,
                                }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            a
          );
        })(s.Component),
        he = Object(o.b)(
          function (e) {
            return { files: e.files, auth: e.auth };
          },
          {
            getFiles: function () {
              return (function () {
                var e = Object(Z.a)(
                  h.a.mark(function e(t, a) {
                    var n;
                    return h.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), V.get("/file_folder/", ae(a));
                          case 2:
                            (n = e.sent), t({ type: C, payload: n.data });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })();
            },
            addFile: function (e) {
              return (function () {
                var t = Object(Z.a)(
                  h.a.mark(function t(a, n) {
                    var s;
                    return h.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), V.post("/file_folder/", e, ne(n))
                            );
                          case 2:
                            (s = t.sent), a({ type: N, payload: s.data });
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, a) {
                  return t.apply(this, arguments);
                };
              })();
            },
            loadUser: ee,
          }
        )(pe);
      function me() {
        return Object(n.jsxs)(A.d, {
          children: [
            Object(n.jsx)(A.a, { exact: !0, from: "/", to: "/myfiles" }),
            Object(n.jsx)(A.b, { path: "/myfiles", component: he }),
          ],
        });
      }
      var be = a(23),
        je = a(26),
        fe = a.n(je);
      var Oe = Object(o.b)(
          function (e) {
            return { isAuthenticated: e.auth.isAuthenticated };
          },
          {
            login: function (e) {
              var t = e.username,
                a = e.password;
              return (function () {
                var e = Object(Z.a)(
                  h.a.mark(function e(n) {
                    var s, i, r;
                    return h.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (s = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (i = JSON.stringify({
                                  username: t,
                                  password: a,
                                })),
                                (e.prev = 2),
                                (e.next = 5),
                                V.post("/rest-auth/login/", i, s)
                              );
                            case 5:
                              (r = e.sent),
                                n({ type: x, payload: r.data }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9), (e.t0 = e.catch(2)), n({ type: v });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            },
            loadUser: ee,
          }
        )(function (e) {
          var t = Object(s.useState)(!1),
            a = Object(be.a)(t, 2),
            i = (a[0], a[1]),
            r = Object(s.useState)(""),
            c = Object(be.a)(r, 2),
            l = c[0],
            A = c[1],
            o = Object(s.useState)(""),
            u = Object(be.a)(o, 2),
            d = u[0],
            g = u[1];
          return Object(n.jsxs)("div", {
            className: fe.a.login_form,
            children: [
              Object(n.jsxs)("div", {
                className: fe.a.login_head,
                children: [
                  Object(n.jsx)("h3", { children: "Sign In" }),
                  Object(n.jsx)("p", {
                    children: "Enter your username and password",
                  }),
                ],
              }),
              Object(n.jsxs)("form", {
                onSubmit: function (t) {
                  i(!0), t.preventDefault();
                  var a = { username: l, password: d };
                  e.login(a).catch(function () {
                    i(!1);
                  });
                },
                children: [
                  Object(n.jsxs)("div", {
                    className: fe.a.form_group,
                    children: [
                      Object(n.jsx)("label", { children: "Username" }),
                      Object(n.jsx)("input", {
                        placeholder: "Username",
                        type: "text",
                        name: "username",
                        value: l,
                        onChange: function (e) {
                          A(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(n.jsxs)("div", {
                    className: fe.a.form_group,
                    children: [
                      Object(n.jsx)("label", { children: "Password" }),
                      Object(n.jsx)("input", {
                        placeholder: "Password",
                        type: "password",
                        name: "password",
                        value: d,
                        onChange: function (e) {
                          g(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(n.jsx)("div", {
                    className: fe.a.submit_div,
                    children: Object(n.jsx)("button", {
                      type: "submit",
                      children: Object(n.jsx)("span", { children: "Sign In" }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        Be = a(18),
        we = a.n(Be);
      var xe = Object(o.b)(
          function (e) {
            return { isAuthenticated: e.auth.isAuthenticated };
          },
          {
            register: function (e) {
              var t = e.username,
                a = e.email,
                n = e.password1,
                s = e.password2;
              return (function () {
                var e = Object(Z.a)(
                  h.a.mark(function e(i) {
                    var r, c, l;
                    return h.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (c = JSON.stringify({
                                  username: t,
                                  email: a,
                                  password1: n,
                                  password2: s,
                                })),
                                (e.prev = 2),
                                (e.next = 5),
                                V.post("/rest-auth/registration/", c, r)
                              );
                            case 5:
                              (l = e.sent),
                                i({ type: B, payload: l.data }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9), (e.t0 = e.catch(2)), i({ type: w });
                            case 12:
                              $.push("/");
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = Object(s.useState)(!1),
            a = Object(be.a)(t, 2),
            i = a[0],
            r = a[1],
            c = Object(s.useState)(""),
            A = Object(be.a)(c, 2),
            o = A[0],
            u = A[1],
            d = Object(s.useState)(""),
            g = Object(be.a)(d, 2),
            p = g[0],
            h = g[1],
            m = Object(s.useState)(""),
            b = Object(be.a)(m, 2),
            j = b[0],
            f = b[1],
            O = Object(s.useState)(""),
            B = Object(be.a)(O, 2),
            w = B[0],
            x = B[1];
          return Object(n.jsxs)("div", {
            className: we.a.form,
            style: { display: "block" },
            children: [
              Object(n.jsxs)("div", {
                className: we.a.head,
                children: [
                  Object(n.jsx)("h3", { children: "Sign Up" }),
                  Object(n.jsx)("p", {
                    children: "Enter your details to create your account",
                  }),
                ],
              }),
              Object(n.jsxs)("form", {
                onSubmit: function (t) {
                  r(!0), t.preventDefault();
                  var a = { username: o, email: p, password1: j, password2: w };
                  e.register(a).catch(function () {
                    r(!1);
                  });
                },
                children: [
                  Object(n.jsxs)("div", {
                    className: we.a.form_group,
                    children: [
                      Object(n.jsx)("label", { children: "Username" }),
                      Object(n.jsx)("input", {
                        placeholder: "Username",
                        type: "text",
                        name: "username",
                        value: o,
                        onChange: function (e) {
                          u(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(n.jsx)("div", {
                    className: we.a.form_group,
                    children: Object(n.jsx)("input", {
                      placeholder: "Email",
                      type: "email",
                      name: "email",
                      value: p,
                      onChange: function (e) {
                        h(e.target.value);
                      },
                    }),
                  }),
                  Object(n.jsx)("div", {
                    className: we.a.form_group,
                    children: Object(n.jsx)("input", {
                      placeholder: "Password",
                      type: "password",
                      name: "password",
                      value: j,
                      onChange: function (e) {
                        f(e.target.value);
                      },
                    }),
                  }),
                  Object(n.jsx)("div", {
                    className: we.a.form_group,
                    children: Object(n.jsx)("input", {
                      placeholder: "Confirm Password",
                      type: "password",
                      name: "changepassword",
                      value: w,
                      onChange: function (e) {
                        x(e.target.value);
                      },
                    }),
                  }),
                  Object(n.jsxs)("div", {
                    className: we.a.submit_div,
                    children: [
                      Object(n.jsxs)("button", {
                        type: "submit",
                        className: we.a.submit_btn,
                        children: [
                          Object(n.jsx)("span", { children: "Submit" }),
                          i &&
                            Object(n.jsx)("span", { className: we.a.loader }),
                        ],
                      }),
                      Object(n.jsx)(l.b, {
                        to: "/auth/login",
                        children: Object(n.jsx)("button", {
                          type: "button",
                          className: we.a.cancel_btn,
                          children: "Cancel",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ve = a.p + "static/media/logo.3c05188e.png",
        ye = a(6),
        Ce = a.n(ye),
        Ee = a.p + "static/media/bg-4.ae9a8f9c.jpg";
      function Ne() {
        return Object(n.jsx)(n.Fragment, {
          children: Object(n.jsx)("div", {
            className: Ce.a.root,
            children: Object(n.jsxs)("div", {
              className: Ce.a.login,
              id: "kt_login",
              children: [
                Object(n.jsx)("div", {
                  className: Ce.a.login_aside,
                  style: { backgroundImage: { bg: Ee } },
                  children: Object(n.jsxs)("div", {
                    className: Ce.a.aside_container,
                    children: [
                      Object(n.jsx)(l.b, {
                        to: "/",
                        className: Ce.a.logo,
                        children: Object(n.jsx)("img", {
                          alt: "Logo",
                          className: Ce.a.logo_img,
                          src: ve,
                        }),
                      }),
                      Object(n.jsxs)("div", {
                        className: Ce.a.aside_content,
                        children: [
                          Object(n.jsx)("h3", {
                            className: Ce.a.aside_title,
                            children: "File Manager!",
                          }),
                          Object(n.jsx)("p", {
                            className: Ce.a.aside_text,
                            children:
                              "Manage your files efficiently and easily with file manager",
                          }),
                        ],
                      }),
                      Object(n.jsxs)("div", {
                        className: Ce.a.footer,
                        children: [
                          Object(n.jsx)("div", {
                            className: Ce.a.file_manager,
                            children: "\xa9 2020 File Manager",
                          }),
                          Object(n.jsxs)("div", {
                            className: Ce.a.flex,
                            children: [
                              Object(n.jsx)(l.b, {
                                to: "/terms",
                                className: Ce.a.white,
                                children: "Privacy",
                              }),
                              Object(n.jsx)(l.b, {
                                to: "/terms",
                                className: Ce.a.white_ml,
                                children: "Social",
                              }),
                              Object(n.jsx)(l.b, {
                                to: "/terms",
                                className: Ce.a.white_ml,
                                children: "Contact",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsxs)("div", {
                  className: Ce.a.content,
                  children: [
                    Object(n.jsxs)("div", {
                      className: Ce.a.content_header,
                      children: [
                        Object(n.jsx)("span", {
                          children: "Don't have an account yet?",
                        }),
                        Object(n.jsx)(l.b, {
                          to: "/auth/registration",
                          className: Ce.a.content_header_link,
                          id: "kt_login_signup",
                          children: "Sign Up!",
                        }),
                      ],
                    }),
                    Object(n.jsx)("div", {
                      className: Ce.a.content_body,
                      children: Object(n.jsxs)(A.d, {
                        children: [
                          Object(n.jsx)(A.b, {
                            path: "/auth/login",
                            component: Oe,
                          }),
                          Object(n.jsx)(A.b, {
                            path: "/auth/registration",
                            component: xe,
                          }),
                          Object(n.jsx)(A.a, {
                            from: "/auth",
                            exact: !0,
                            to: "/auth/login",
                          }),
                          Object(n.jsx)(A.a, { to: "/auth/login" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var Fe = (function (e) {
          Object(X.a)(a, e);
          var t = Object(W.a)(a);
          function a() {
            return Object(T.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(z.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.logout();
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.hasAuthToken
                    ? null
                    : Object(n.jsx)(A.a, { to: "/auth/login" });
                },
              },
            ]),
            a
          );
        })(s.Component),
        _e = Object(o.b)(null, { logout: te })(Fe),
        Ie = a(51),
        Se = a.n(Ie),
        Qe = a(52),
        ke = a.n(Qe),
        Le = a.p + "static/media/newfang.37477d54.svg";
      var He = Object(o.b)(null, { logout: te })(function (e) {
          return Object(n.jsxs)("div", {
            className: ke.a.header,
            children: [
              Object(n.jsx)("img", {
                src: Le,
                alt: "newFang",
                width: "15%",
                height: "100%",
              }),
              Object(n.jsx)("p", {
                style: { paddingRight: "2rem" },
                onClick: function () {
                  return e.logout();
                },
                children: "Logout",
              }),
            ],
          });
        }),
        Ge = (function (e) {
          Object(X.a)(a, e);
          var t = Object(W.a)(a);
          function a() {
            return Object(T.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(He, {}),
                      Object(n.jsx)("main", {
                        className: Se.a.Content,
                        children: this.props.children,
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.Component);
      var De = Object(o.b)(function (e) {
        return { isAuthenticated: e.auth.isAuthenticated };
      }, null)(function (e) {
        return Object(n.jsxs)(A.d, {
          children: [
            e.isAuthenticated
              ? Object(n.jsx)(A.a, { from: "/auth", to: "/" })
              : Object(n.jsx)(A.b, { children: Object(n.jsx)(Ne, {}) }),
            Object(n.jsx)(A.b, { path: "/logout", component: _e }),
            e.isAuthenticated
              ? Object(n.jsx)(Ge, { children: Object(n.jsx)(me, {}) })
              : Object(n.jsx)(A.a, { to: "/auth/login" }),
          ],
        });
      });
      var Re = function () {
          return Object(n.jsx)(o.a, {
            store: J,
            children: Object(n.jsx)(l.a, {
              children: Object(n.jsx)(A.d, { children: Object(n.jsx)(De, {}) }),
            }),
          });
        },
        Pe = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 87))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  i = t.getLCP,
                  r = t.getTTFB;
                a(e), n(e), s(e), i(e), r(e);
              });
        };
      c.a.render(
        Object(n.jsx)(i.a.StrictMode, { children: Object(n.jsx)(Re, {}) }),
        document.getElementById("root")
      ),
        Pe();
    },
  },
  [[86, 1, 2]],
]);
//# sourceMappingURL=main.ef1d9110.chunk.js.map
