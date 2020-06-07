const ROLES = {
  killer: {
    name: 'killer',
    description: 'you get rid of citizens',
    emoji: {
      emoji: '🔫',
      label: 'squirt gun',
    },
  },
  doctor: {
    name: 'doctor',
    description: 'you heal wounded citizens',
    emoji: {
      emoji: '💉',
      label: 'syringe',
    },
  },
  cop: {
    name: 'cop',
    description: 'you check whether someone is a killer',
    emoji: {
      emoji: '🔎',
      label: 'magnifying glass',
    },
  },
  citizen: {
    name: 'citizen',
    description: 'you vote killers out of the town',
    emoji: {
      emoji: '👥',
      label: 'silhouettes of people',
    },
  },
  not_killer: {
    name: 'not killer',
    description: 'this player is not a killer',
    emoji: {
      emoji: '🙈',
      label: 'see no evil monkey',
    },
  },
};

export default ROLES;
