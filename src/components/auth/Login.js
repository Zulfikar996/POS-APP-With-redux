import React, { Component } from "react";
import axios from "axios";
import Background from "../image/1.jpg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:4500/user/login", this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user-id", res.data.id);
        localStorage.setItem("Status", res.data.Status);
        localStorage.setItem("isAuth", true);
        this.props.history.push("/newHome");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="row" style={{ width: "100%", height: "100vh" }}>
        <img
          className="loginBg"
          src={Background}
          style={{ position: "absolute", width: "100%", height: "100vh" }}
        />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8" style={{ marginTop: "12%" }}>
              <form
                onSubmit={this.onSubmit}
                style={{
                  height: "260px",
                  marginTop: "13%",
                  backgroundColor: "#6f55258a"
                }}
              >
                <div className="form-group">
                  <center>
                    <div
                      class="input-group mb-3"
                      style={{
                        backgroundColor: "rgba(160, 108, 28, 0.79)",
                        borderRadius: "15px",
                        width: "500px"
                      }}
                    >
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="basic-addon1"
                          style={{
                            backgroundColor: "transparent",
                            border: "none"
                          }}
                        >
                          <i
                            className="material-icons"
                            style={{ color: "grey" }}
                          >
                            {" "}
                            person
                          </i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter email"
                        aria-label="Username"
                        name="email"
                        onChange={this.onChange}
                        aria-describedby="basic-addon1"
                        style={{
                          backgroundColor: "transparent",
                          border: "none"
                        }}
                      />
                    </div>
                  </center>
                </div>
                <div className="form-group">
                  <center>
                    <div
                      class="input-group mb-3"
                      style={{
                        backgroundColor: "rgba(160, 108, 28, 0.79)",
                        borderRadius: "15px",
                        width: "500px"
                      }}
                    >
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="basic-addon1"
                          style={{
                            backgroundColor: "transparent",
                            border: "none"
                          }}
                        >
                          <i
                            className="material-icons"
                            style={{ color: "grey" }}
                          >
                            {" "}
                            lock
                          </i>
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Password"
                        aria-label="Username"
                        name="password"
                        onChange={this.onChange}
                        aria-describedby="basic-addon1"
                        style={{
                          backgroundColor: "transparent",
                          border: "none"
                        }}
                      />
                    </div>
                  </center>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    marginLeft: "320px",
                    position: "absolute",
                    borderRadius: "15px",
                    width: "80px",
                    border: "none",
                    backgroundColor: "rgba(160, 108, 28, 0.79)"
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
