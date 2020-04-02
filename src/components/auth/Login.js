import React, { Component } from "react";
import axios from "axios";
import Background from "../image/1.jpg";
import logo from './FamiRest.png'
require('dotenv').config();


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
      .post(`${process.env.REACT_APP_URL}/user/login`, this.state)
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
      <div className='row'>
        <div className='col-lg-6' style={{ textAlign: 'left' }}>
          <img
            style={{
              width: 1800,
              height: '100vh',
            }}
            src={Background}
            alt='login'
          />
        </div>

        <div className='col-lg-6'>
          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
              boxShadow: '-3px 3px 6px 3px #b28f4ca6',
              backgroundColor: '#dfbc6c',
              width: 500,
              marginLeft: '30%',
            }}
          >
            <img
              style={{
                width: 290,
                height: 290,
              }}
              src={logo}
              alt='Logo'
            />

            <div className='col-md-8 my-4'>
              <form>
                <div className='form-group' style={{ marginRight: '-50%' }}>
                  <label>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    name='email'
                    onChange={this.onChange}
                    required
                  />

                  <div className='form-group'>
                    <label>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Enter password'
                      name='password'
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    onClick={this.onSubmit}
                    type='submit'
                    className='btn login btn-primary'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
