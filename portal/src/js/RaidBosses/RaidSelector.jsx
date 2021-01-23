import React, { Component } from 'react';
import styles from './RaidSelector.module.css';
import { CASTLE_NATHRIA } from '../../config/constants.js';

class RaidSelector extends Component {
  constructor(props) {
    super(props);
    this.generateRaidEntry = this.generateRaidEntry.bind(this);
  }

  generateRaidEntry(raidName) {
    return(
      <li> {raidName} </li>
    );
  }

  render() {
    return(
      <div className={styles.raidSelectorModule}>
        <ul className={styles.flexul}>
          {this.generateRaidEntry(CASTLE_NATHRIA)}
        </ul>
      </div>
    );
  }

}

export default RaidSelector;
