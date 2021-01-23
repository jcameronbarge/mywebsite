import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.headerModule}>
        <button> Sign In </button>
        <button> Register </button>
      </div>
    );
  }
}

export default Header;
