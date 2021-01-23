import React, { Component } from "react";
import firebase from "firebase";

import Core from "./Core.jsx";
import Login from "./Login/Login.jsx";
import Header from "./Header/Header.jsx";
import { ProvideAuth, useAuth } from "../auth/use-auth.js";

import styles from "./App.module.css";
import "../../styles/app.css";

class App extends Component {
  render() {
    return (
      <ProvideAuth>
        <div className={styles.app}>
          <div className={styles.flex}>
              <Header />
              <Core />
          </div>
        </div>
      </ProvideAuth>
    )
  }
}

export default App;

function UserProfile() {
  const auth = useAuth();
  return (
    <div>
      <button onClick={() => auth.signout()}>Signout</button>
      <h1> {auth.user ? "logged in" : "not logged in" } </h1>
    </div>
  );
}
