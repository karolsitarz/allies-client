const ROLES = {
  killer: {
    name: 'a killer',
    description: 'you get rid of citizens',
    emoji: {
      emoji: '🔫',
      label: 'squirt gun',
    },
  },
  doctor: {
    name: 'a doctor',
    description: 'you heal wounded citizens',
    emoji: {
      emoji: '💉',
      label: 'syringe',
    },
  },
  cop: {
    name: 'a cop',
    description: 'you check whether someone is a killer',
    emoji: {
      emoji: '🔎',
      label: 'magnifying glass',
    },
  },
  citizen: {
    name: 'a citizen',
    description: 'you vote killers out of the town',
    emoji: {
      emoji: '👥',
      label: 'silhouettes of people',
    },
  },
};

export default ROLES;
