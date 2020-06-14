const ROLES = {
  killer: {
    name: 'killer',
    description: 'you get rid of citizens',
    what_to_do: 'at night, you choose a citizen to kill',
    emoji: {
      emoji: '🔫',
      label: 'squirt gun',
    },
  },
  doctor: {
    name: 'doctor',
    description: 'you heal wounded citizens',
    what_to_do: 'at night, you prevent a citizen from being killed',
    emoji: {
      emoji: '💉',
      label: 'syringe',
    },
  },
  cop: {
    name: 'cop',
    description: 'you investigate citizens',
    what_to_do: 'at night, you check whether someone is a killer or not',
    emoji: {
      emoji: '🔎',
      label: 'magnifying glass',
    },
  },
  citizen: {
    name: 'citizen',
    description: "you're sleeping peacefully",
    what_to_do: 'you sleep all night',
    emoji: {
      emoji: '👥',
      label: 'silhouettes of people',
    },
  },
  nitwit: {
    name: 'nitwit',
    description: "you're the wildcard",
    what_to_do: 'you try to get voted off during the day (act suspicious!)',
    emoji: {
      emoji: '🥜',
      label: 'nuts',
    },
  },
  cabby: {
    name: 'cabby',
    description: 'you drive people out of town',
    what_to_do: "you cancel someone's move for the night",
    emoji: {
      emoji: '🚘',
      label: 'car front',
    },
  },
  sniper: {
    name: 'sniper',
    description: 'you try to shoot a killer down',
    what_to_do:
      "you choose once, at night. if it's not a killer, you're dead too.",
    emoji: {
      emoji: '🎯',
      label: 'dartboard',
    },
  },
};

export default ROLES;
