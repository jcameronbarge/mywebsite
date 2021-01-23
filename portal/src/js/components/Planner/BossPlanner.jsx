import React, { Component} from 'react';
import moment from 'moment';
import styles from './BossPlanner.module.css';
import { useParams } from 'react-router-dom';

import { db } from "../../../index.js";
import { NORMAL, HEROIC, MYTHIC, BOSS_PLANS, SPELL_ENTRIES } from "../../../config/constants.js";
import { getSpell } from "../../../config/spells.js";
import AddEntry from "./AddEntry.jsx";

class BossPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planId: this.props.planId,
      boss: null,
      planName: null,
      difficulty: null,
      raid: null,
      unsubscribePlan: null,
      unsubscribeSpells: null,
      addingEntry: false,
      spellEntries: []
    }
    this.updatePlan = this.updatePlan.bind(this);
    this.updateDoc = this.updateDoc.bind(this);
    this.updateSpells = this.updateSpells.bind(this);
    this.toggleAddingEntry = this.toggleAddingEntry.bind(this);
    this.generateSpellEntry = this.generateSpellEntry.bind(this);

    const planDoc = db.collection("boss-plans").doc(this.props.planId);
    planDoc.get().then((doc) => {
      if(doc.exists) {
        const plan = doc.data();
        const unsubscribePlan = planDoc.onSnapshot((snapshot) => {
          // May want to update in future to be more precise
          this.updateDoc(snapshot);
        });

        const unsubscribeSpells = doc.ref.collection(SPELL_ENTRIES).onSnapshot((snapshot) => {
          this.updateSpells(snapshot);
        });

        this.setState({
          boss: plan.boss,
          raid: plan.raid,
          difficulty: plan.difficulty,
          planName: plan.name,
          unsubscribePlan,
          unsubscribeSpells,
        });
      }
    });

  }

  updatePlan(newPlanId) {

    if (this.state.unsubscribePlan) {
      this.state.unsubscribePlan();
    }
    if (this.state.unsubscribeSpells) {
      this.state.unsubscribeSpells();
    }

    this.setState({
      unsubscribeSpells: null,
      unsubscribePlan: null
    });

    const planDoc = db.collection("boss-plans").doc(this.props.planId);
    planDoc.get().then((doc) => {
      if(doc.exists) {
        const plan = doc.data();
        const unsubscribePlan = planDoc.onSnapshot((snapshot) => {
          // May want to update in future to be more precise
          this.updateDoc(snapshot);
        });

        const unsubscribeSpells = doc.ref.collection(SPELL_ENTRIES).onSnapshot((snapshot) => {
          this.updateSpells(snapshot);
        });

        this.setState({
          planId: newPlanId,
          boss: plan.boss,
          raid: plan.raid,
          difficulty: plan.difficulty,
          planName: plan.name,
          unsubscribePlan,
          unsubscribeSpells,
        });
      }
    });
  }

  updateDoc(doc) {
    if (doc.exists) {
      const plan = doc.data();
      this.setState({
        boss: plan.boss,
        raid: plan.raid,
        difficulty: plan.difficulty,
        planName: plan.name
      });
    } else {
      if (this.state.unsubscribePlan) {
        this.state.unsubscribePlan();
        this.setState({
          unsubscribePlan: null
        });
      }
      if (this.state.unsubscribeSpells) {
        this.state.unsubscribeSpells();
        this.setState({
          unsubscribeSpells: null
        });
      }
    }
  }

  updateSpells(collection) {
    let spellEntries = [];
    collection.forEach((doc) => {
      let spellEntry = doc.data();
      spellEntry.id = doc.id;
      spellEntries.push(spellEntry);
    });
    console.log(spellEntries);
    this.setState({
      spellEntries
    });
  }

  toggleAddingEntry() {
    this.setState({
      addingEntry: !this.state.addingEntry
    });
  }

  generateSpellEntry(spell) {
    const time = moment(spell.seconds*1000).format('mm:ss');
    const spellObj = getSpell(spell.spellId);
    const spellName = spellObj ? spellObj.name : "Unknown Spell Id";
    return (
      <p> {time} : {spellName} </p>
    );
  }

  render() {
    let { planId } = useParams();
    if (planId != this.state.planId) {
      this.updatePlan(planId);
    }

    // Render the difficulty element
    let difficultyElement;
    switch(this.state.difficulty) {
      case NORMAL:
        difficultyElement = (
          <span className={styles.normalDifficulty}>
            Normal
          </span>
        );
        break;
      case HEROIC:
        difficultyElement = (
          <span className={styles.heroicDifficulty}>
            Heroic
          </span>
        );
        break;
      case MYTHIC:
      difficultyElement = (
        <span className={styles.mythicDifficulty}>
          Mythic
        </span>
      );
    }

    return (
      <div className={`${styles.centerItem} ${styles.bossPlanner}`}>
        {this.state.addingEntry ? <AddEntry toggleAddingEntry={this.toggleAddingEntry} planId={this.state.planId}/> : null }
        <div className={styles.bossHeader}>
          {this.state.boss}
        </div> <br/>
        <div className={styles.planInfo}>
          <span className={styles.difficulty}>
            {difficultyElement}
          </span>
          <span className={styles.planName}>
            {this.state.planName}
          </span>
        </div>
        <div>
          <button className={styles.button} type="button" onClick={() => {this.toggleAddingEntry()}}> Add Element </button> <br />
        </div> <br />
        <div className={styles.spellEntries}>
          {this.state.spellEntries.map((spell) => this.generateSpellEntry(spell))}
        </div>
      </div>
    );
  }
}

export default BossPlanner;
