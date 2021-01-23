import React, { Component } from "react";
import firebase from "firebase";

import { EMAIL, PASSWORD } from "../../../config/constants";
import styles from './Login.module.css';
import { useAuth } from "../../auth/use-auth.js";

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    switch(field) {
      case EMAIL:
        console.log(value);
        this.setState({
          email: value
        });
        break;
      case PASSWORD:
        console.log(value);
        this.setState({
          password: value
        });
        break;
      default:
        console.log("ERROR: Unsupported field");
    }
  }

  handleSubmit(event) {
    const auth = useAuth();
    event.preventDefault();
    console.log("signin");
    // auth.signin(this.state.email, this.state.password);

  }

  render() {
    return (
      <div className={styles.loginModule}>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.inputField} type="text" name={EMAIL}
            placeholder="TEST" value={this.state.email} onChange={this.handleChange} /><br />
          <input className={styles.inputField} type="password" name={PASSWORD}
          placeholder="Password" value={this.state.password} onChange={this.handleChange} /><br />
          <input className={styles.submit} type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
