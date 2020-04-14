import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';

const ROLES = {
  mafia: {
    name: 'Mafia',
    description: 'You want to get rid of every citizen.',
    emoji: {
      emoji: '🔫',
      label: 'a squirt gun',
    },
  },
  citizen: {
    name: 'Citizen',
    description: 'You want to vote Mafia out of the town.',
    emoji: {
      emoji: '👥',
      label: 'silhouettes of people',
    },
  },
};

const GameStart = () => {
  const { role } = useSelector((state) => state.route.data);
  const { name, description, emoji } = ROLES[role];
  return (
    <Container fade grow padded>
      <h2>Your role is...</h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <Space size="2em" />
      <p>{description}</p>
    </Container>
  );
};

export default GameStart;
