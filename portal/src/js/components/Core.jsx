import React, { Component } from 'react';
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import styles from './Core.module.css';
import {
  BOSS_SELECTOR,
  BOSS_PLANNER } from "../../config/constants";
import history from "../../client/history.js";

import BossPlanner from './Planner/BossPlanner.jsx';
import BossSelector from './Planner/BossSelector.jsx';
import CastleNathria from '../RaidBosses/CastleNathria.jsx';
import RaidSelector from '../RaidBosses/RaidSelector.jsx';

class Core extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coreDisplayState: BOSS_SELECTOR,
      planId: null,
    }

    this.handleDisplayStateChange = this.handleDisplayStateChange.bind(this);
    this.handleChangePlanId = this.handleChangePlanId.bind(this);
    this.oldRouting = this.oldRouting.bind(this);
  }



  handleDisplayStateChange(newState) {
    this.setState({
      coreDisplayState: newState
    });
  }

  handleChangePlanId(newPlanId) {
    this.setState({
      planId: newPlanId
    });
  }

  oldRouting() {
    let coreElement;
    switch(this.state.coreDisplayState) {
      case BOSS_SELECTOR:
        coreElement = (
          <BossSelector
            onPlanIdChange={this.handleChangePlanId}
            onDisplayStateChange={this.handleDisplayStateChange} />

        );
        break;
      case BOSS_PLANNER:
        coreElement = (
          <BossPlanner
              planId={this.state.planId}/>
        );
        break;
      default:
        coreElement = (
          <div> UNKNOWN CORE ELEMENT STATE </div>
        );
    }
    return coreElement;
  }

  render() {
    // let coreElement = this.oldRouting();
    return (
      <div className={styles.coreModule}>
        <div className={styles.coreBackground}>
          <div className={styles.backgroundDissolve}></div>
        </div>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <BossSelector
                onPlanIdChange={this.handleChangePlanId}
                onDisplayStateChange={this.handleDisplayStateChange} />
            </Route>
            <Route exact path="test">
              HELLOOOOO
            </Route>
            <Route>
              TEST
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}


export default Core;
