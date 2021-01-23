"use strict";

const warriorObj = {
  name: "Warrior",
  css: "warrior"
};
export const WARRIOR = warriorObj;

const paladinObj = {
  name: "Paladin",
  css: "paladin"
};
export const PALADIN = paladinObj;

const hunterObj = {
  name: "Hunter",
  css: "hunter"
};
export const HUNTER = hunterObj;

const rogueObj = {
  name: "Rogue",
  css: "rogue"
};
export const ROGUE = rogueObj;

const priestObj = {
  name: "Priest",
  css: "priest"
};
export const PRIEST = priestObj;

const shamanObj = {
  name: "Shaman",
  css: "shaman"
};
export const SHAMAN = shamanObj;

const mageObj = {
  name: "Mage",
  css: "mage"
};
export const MAGE = mageObj;

const warlockObj = {
  name: "Warlock",
  css: "warlock"
};
export const WARLOCK = warlockObj;

const monkObj = {
  name: "Monk",
  css: "monk"
};
export const MONK = monkObj;

const druidObj = {
  name: "Druid",
  css: "druid"
};
export const DRUID = druidObj;

const demonHunterObj = {
  name: "Demon Hunter",
  css: "demonHunter"
};
export const DEMON_HUNTER = demonHunterObj;

const deathKnightObj = {
  name: "Death Knight",
  css: "deathKnight"
};
export const DEATH_KNIGHT = deathKnightObj;

export const CLASSES = [deathKnightObj, demonHunterObj, druidObj, hunterObj, mageObj, monkObj, paladinObj, priestObj, rogueObj, shamanObj, warriorObj, warlockObj]

export const SPECS = {
  [warriorObj.name]: [
      {
        name: "Arms",
        css: "warrior",
        spells: [97462]
      },
      {
        name: "Fury",
        css: "warrior",
        spells: [97462]
      },
      {
        name: "Protection",
        css: "warrior",
        spells: [97462]
      }
  ],
  [paladinObj.name]: [
    {
      name: "Holy",
      css: "paladin",
      spells: [31821,31884,216331]
    },
    {
      name: "Protection",
      css: "paladin",
      spells: [31884]
    },
    {
      name: "Retribution",
      css: "paladin",
      spells: [31884]
    }
  ],
  [hunterObj.name]: [
    {
      name: "Beast Mastery",
      css: "hunter",
      spells: []
    },
    {
      name: "Marksmanship",
      css: "hunter",
      spells: []
    },
    {
      name: "Survival",
      css: "hunter",
      spells: []
    }
  ],
  [rogueObj.name]: [
    {
      name: "Assassin",
      css: "rogue",
      spells: []
    },
    {
      name: "Outlaw",
      css: "rogue",
      spells: []
    },
    {
      name: "Subtlety",
      css: "rogue",
      spells: []
    }
  ],
  [priestObj.name]: [
    {
      name: "Discipline",
      css: "priest",
      spells: [62618]
    },
    {
      name: "Holy",
      css: "priest",
      spells: [64843,265202]
    },
    {
      name: "Shadow",
      css: "priest",
      spells: [15286]
    }
  ],
  [shamanObj.name]: [
    {
      name: "Elemental",
      css: "shaman",
      spells: []
    },
    {
      name: "Enhancement",
      css: "shaman",
      spells: []
    },
    {
      name: "Restoration",
      css: "shaman",
      spells: [108280,98008,207399]
    }
  ],
  [mageObj.name]: [
    {
      name: "Arcane",
      css: "mage",
      spells: []
    },
    {
      name: "Fire",
      css: "mage",
      spells: []
    },
    {
      name: "Frost",
      css: "mage",
      spells: []
    }
  ],
  [warlockObj.name]: [
    {
      name: "Affliction",
      css: "warlock",
      spells: []
    },
    {
      name: "Demonology",
      css: "warlock",
      spells: []
    },
    {
      name: "Destruction",
      css: "warlock",
      spells: []
    }
  ],
  [monkObj.name]: [
    {
      name: "Brewmaster",
      css: "monk",
      spells: []
    },
    {
      name: "Mistweaver",
      css: "monk",
      spells: [115310]
    },
    {
      name: "Windwalker",
      css: "monk",
      spells: []
    }
  ],
  [druidObj.name]: [
    {
      name: "Balance",
      css: "druid",
      spells: []
    },
    {
      name: "Feral",
      css: "druid",
      spells: []
    },
    {
      name: "Guardian",
      css: "druid",
      spells: []
    },
    {
      name: "Restoration",
      css: "druid",
      spells: [740]
    }
  ],
  [demonHunterObj.name]: [
    {
      name: "Havoc",
      css: "demonHunter",
      spells: [196718]
    },
    {
      name: "Vengeance",
      css: "demonHunter",
      spells: []
    }
  ],
  [deathKnightObj.name]: [
    {
      name: "Blood",
      css: "deathKnight",
      spells: [51052]
    },
    {
      name: "Frost",
      css: "deathKnight",
      spells: [51052]
    },
    {
      name: "Unholy",
      css: "deathKnight",
      spells: [51052]
    }
  ]
}
