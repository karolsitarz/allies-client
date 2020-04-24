const ROLES = {
  mafia: {
    name: 'mafia',
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
  citizen: {
    name: 'citizen',
    description: 'you vote mafia out of the town',
    emoji: {
      emoji: '👥',
      label: 'silhouettes of people',
    },
  },
};

export default ROLES;
