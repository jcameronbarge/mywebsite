import React, { Component } from 'react';
import styles from "./AddEntry.module.css";
import colors from "../../../css/colors.css";

import { db } from "../../../index.js";
import { CLASSES, SPECS } from "../../../config/classes.js";
import { getSpell } from "../../../config/spells.js";
import { MINUTES, SECONDS, BOSS_PLANS, SPELL_ENTRIES } from "../../../config/constants.js";

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: null,
      activeSpec: {},
      activeSpell: 0,
      minutes: null,
      seconds: null
    }

    this.generateClassEntry = this.generateClassEntry.bind(this);
    this.setActiveClass = this.setActiveClass.bind(this);
    this.generateSpecEntry = this.generateSpecEntry.bind(this);
    this.setActiveSpec = this.setActiveSpec.bind(this);
    this.setActiveSpell = this.setActiveSpell.bind(this);
    this.generateSpellEntry = this.generateSpellEntry.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <span className={styles.close} onClick={this.props.toggleAddingEntry}>
            &times;
          </span>
          <div className={styles.classSelector}>
            <ul className={styles.flexul}>
              {CLASSES.map((classObj) => this.generateClassEntry(classObj))}
            </ul>
          </div>
          <div className={styles.spellSelector}>
            <ul className={styles.flexul}>
              {this.state.activeSpec.spells ? this.state.activeSpec.spells.map((spell) => this.generateSpellEntry(spell)) : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  generateClassEntry(classObj) {
    const className = classObj.name;
    if (this.state.activeClass == className) {
      return (
        <li className={colors[classObj.css]}>
        {className} <br/>
        <ul className={styles.flexul}>
          {SPECS[className].map(spec => this.generateSpecEntry(spec))}
        </ul>
        </li>
      )
    } else {
      return (
        <li className={colors[classObj.css]} onClick={() => this.setActiveClass(className)}> {className} </li>
      );
    }
  }

  generateSpecEntry(spec) {
    const cssClass = `${styles.specEntry} ${colors[spec.css]}`;
    return (
      <li className={cssClass} onClick={() => this.setActiveSpec(spec)}> {spec.name} </li>
    );
  }

  generateSpellEntry(spellId) {
    const cssClass = `${styles.spellEntry} ${colors.whiteText}`
    const spell = getSpell(spellId);
    if (!spell) return null;

    const spellForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name={MINUTES} value={this.state.minutes} onChange={this.handleChange} />
        <input type="text" name={SECONDS} value={this.state.seconds} onChange={this.handleChange} />
        <input type="submit" value="Add Spell" />
      </form>
    );

    if(this.state.activeSpell == spell.id) {
      return (
        <li className={cssClass}>
          {spell.name}<br />
          {spellForm}
        </li>
      );
    } else {
      return (
        <li className={cssClass} onClick={() => this.setActiveSpell(spell.id)}> {spell.name} </li>
      );
    }
  }

  setActiveClass(className) {
    this.setState({
      activeClass: className
    });
  }

  setActiveSpec(spec) {
    this.setState({
      activeSpec: spec
    });
  }

  setActiveSpell(spell) {
    this.setState({
      activeSpell: spell,
      minutes: null,
      seconds: null
    });
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    switch(field) {
      case(MINUTES):
        this.setState({
          minutes: value
        });
        break;
      case(SECONDS):
        this.setState({
          seconds: value
        });
        break;
      default:
        console.log("Invalid state");
        break;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const minutes = parseInt(this.state.minutes);
    const seconds = parseInt(this.state.seconds);


    if (isNaN(this.state.minutes) || isNaN(this.state.seconds)) {
      console.log("ERROR: INVALID INPUT");
    } else {
      const secondValue = minutes*60 + seconds;

      const planEntries = db.collection(BOSS_PLANS).doc(this.props.planId).collection(SPELL_ENTRIES);
      planEntries.add({
        spellId: this.state.activeSpell,
        seconds: secondValue
      }).then((result) => {
        this.props.toggleAddingEntry();
      });
    }
  }
}
export default AddEntry;
