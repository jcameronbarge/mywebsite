import React, { Component} from 'react';

import styles from './BossSelector.module.css';
import RaidSelector from "../../RaidBosses/RaidSelector.jsx";
import CastleNathria from "../../RaidBosses/CastleNathria.jsx";

class BossSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChangePlan = this.handleChangePlan.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
  }

  handleChangePlan(id) {
    this.props.onPlanIdChange(id);
  }

  handleDisplayChange(state) {
    this.props.onDisplayStateChange(state);
  }

  render() {
    return (
      <div className={`${styles.centerItem} ${styles.bossSelector}`}>
        <RaidSelector />
        <CastleNathria
          onPlanIdChange={this.handleChangePlan}
          onDisplayStateChange={this.handleDisplayChange}/>
      </div>
    );
  }
}

export default BossSelector;
