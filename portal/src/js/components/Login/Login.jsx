import React, { Component } from "react";
import { EMAIL, PASSWORD } from "../../../config/constants";
import styles from './Login.module.css';


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
    event.preventDefault();
    console.log(`Email: %s \n Password: %s`, this.state.email, this.state.password);

  }

  render() {
    return (
      <div className={styles.loginModule}>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.inputField} type="text" name={EMAIL}
            placeholder="Email" value={this.state.email} onChange={this.handleChange} /><br />
          <input className={styles.inputField} type="password" name={PASSWORD}
          placeholder="Password" value={this.state.password} onChange={this.handleChange} /><br />
          <input className={styles.submit} type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
