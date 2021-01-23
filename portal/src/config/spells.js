"use strict";

const spells = {
  // Warrior

  // ALL
  97462: {
    id: 97462,
    name: "Rallying Cry"
  },

  // Paladin

  // Holy
  31821: {
    id: 31821,
    name: "Aura Mastery"
  },
  // Holy, Ret, Prot
  31884: {
    id: 31884,
    name: "Avenging Wrath"
  },
  // Holy
  216331: {
    id: 216331,
    name: "Avenging Crusader"
  },

  // Priest

  // Holy
  64843: {
    id: 64843,
    name: "Divine Hymn"
  },
  // Holy
  265202: {
    id: 265202,
    name: "Holy Word: Salvation"
  },
  // Shadow
  15286: {
    id: 15286,
    name: "Vampyric Embrace"
  },
  // Disc
  62618: {
    id: 62618,
    name: "Holy Word: Barrier"
  },

  // Death Knight

  //ALL
  51052: {
    id: 51052,
    name: "Anti-Magic Zone"
  },

  // SHAMAN

  // RESTO
  108280: {
    id: 108280,
    name: "Healing Tide Totem"
  },
  // RESTO
  98008: {
    id: 98008,
    name: "Spirit Link Totem"
  },
  // RESTO
  207399: {
    id: 207399,
    name: "Ancestral Protection Totem"
  },

  // MONK

  //MIST
  115310: {
    id: 115310,
    name: "Revival"
  },

  // DRUID

  // RESTO
  740: {
    id: 740,
    name: "Tranquility"
  },

  // Demon Hunter

  // HAVOC
  196718: {
    id: 196718,
    name: "Darkness"
  }
}

export function getSpell(spellId) {
  return spells[spellId];
}
