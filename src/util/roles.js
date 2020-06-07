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
  cop: {
    name: 'cop',
    description: 'you check whether someone is mafia',
    emoji: {
      emoji: '🔎',
      label: 'magnifying glass',
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
