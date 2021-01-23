import React, { Component } from 'react';
import styles from './CastleNathria.module.css';
import colors from "../../css/colors.css";
import {
  BOSS_PLANNER,
  DIFFICULTY,
  NORMAL,
  HEROIC,
  MYTHIC,
  PLAN_NAME,
  CASTLE_NATHRIA,
  SHRIEKWING,
  HUNTSMAN_ALTIMOR,
  HUNGERING_DESTROYER,
  INERVA_DARKVEIN,
  SKS,
  ARTIFICER_XYMOX,
  COUNCIL_OF_BLOOD,
  SLUDGEFIST,
  STONE_LEGION_GENERALS,
  SIRE_DENATHRIUS } from "../../config/constants";
import { db } from "../../index.js";

class CastleNathria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBoss: "none",
      planName: "",
      difficulty: NORMAL
    };

    this.clearActiveBoss = this.clearActiveBoss.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateBossEntry = this.generateBossEntry.bind(this);
    this.createDifficultyForm = this.createDifficultyForm.bind(this);
    this.updateDifficulty = this.updateDifficulty.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    switch(field) {
      case PLAN_NAME:
        this.setState({
          planName: value
        });
        break;
      case DIFFICULTY:
        this.setState({
          difficulty: value
        });
        break;
      default:
        console.log("ERROR: Unsupported field");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED");

    db.collection("boss-plans").add({
      boss: this.state.activeBoss,
      difficulty: this.state.difficulty,
      raid: CASTLE_NATHRIA,
      name: this.state.planName
    }).then((response) => {
      this.props.onPlanIdChange(response.id);
      this.props.onDisplayStateChange(BOSS_PLANNER);
    })

  }

  generateBossEntry(boss) {
    const bossName = boss.name;
    let bossForm = (
      <div className={styles.inputData}>
        {this.createDifficultyForm()}
        <form onSubmit={this.handleSubmit}>

          <input type="text" name={PLAN_NAME}
          placeholder="Plan Name" value={this.state.planName} onChange={this.handleChange} autocomplete="off" />
          <input type="submit" value="Create" />
        </form>
      </div>
    );

    if (this.state.activeBoss == bossName) {
      return (
        <li className={styles.bossSelected}>
            <div className={styles.testFlex}>
              <div className={styles.bossName}> {bossName} </div>
              {bossForm}
            </div>
        </li>
      );
    } else {
      return (
        <li className={styles.bossClosed} onClick={() => this.setActiveBoss(bossName)}> {bossName} </li>
      );
    }
  }

  render() {
    return(
      <div className={styles.castleNathriaModule}>
        <nav className={styles.flexNav}>
          <ul className={styles.flexul}>
            {this.generateBossEntry(SHRIEKWING)}
            {this.generateBossEntry(HUNTSMAN_ALTIMOR)}
            {this.generateBossEntry(HUNGERING_DESTROYER)}
            {this.generateBossEntry(INERVA_DARKVEIN)}
            {this.generateBossEntry(SKS)}
            {this.generateBossEntry(ARTIFICER_XYMOX)}
            {this.generateBossEntry(COUNCIL_OF_BLOOD)}
            {this.generateBossEntry(SLUDGEFIST)}
            {this.generateBossEntry(STONE_LEGION_GENERALS)}
            {this.generateBossEntry(SIRE_DENATHRIUS)}
          </ul>
        </nav>
      </div>
    )
  }

  setActiveBoss(name) {
    this.setState({
      activeBoss: name,
       planName: "",
       difficulty: "normal"
     });
  }
  clearActiveBoss() {
    this.setState({ activeBoss: "none" });
  }

  createDifficultyForm() {
    return (
      <div className={styles.difficultyForm}>
        <div className={this.state.difficulty == NORMAL ? `${styles.normal} ${styles.normalSelected} ${colors.normal}` : `${styles.normal} ${colors.normal}`} onClick={() => this.updateDifficulty(NORMAL)}>
          Normal
        </div>
        <div className={this.state.difficulty == HEROIC ? `${styles.heroic} ${styles.heroicSelected} ${colors.heroic}` : `${styles.heroic} ${colors.heroic}`} onClick={() => this.updateDifficulty(HEROIC)}>
          Heroic
        </div>
        <div className={this.state.difficulty == MYTHIC ? `${styles.mythic} ${styles.mythicSelected} ${colors.mythic}` : `${styles.mythic} ${colors.mythic}`} onClick={() => this.updateDifficulty(MYTHIC)}>
          Mythic
        </div>
      </div>
    )
  }

  updateDifficulty(newDifficulty) {
    this.setState({
      difficulty: newDifficulty
    });
  }
}

export default CastleNathria;
