import React, { Component } from "react";

import Login from "./Login/Login.jsx";

import styles from "./App.module.css";
import "../../styles/app.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Login />
      </div>
    )
  }
}

export default App;
