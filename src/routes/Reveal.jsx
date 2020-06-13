import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';
import LoadingBar from 'components/LoadingBar';

const NOT_KILLER = {
  name: 'not a killer',
  emoji: {
    emoji: '🙈',
    label: 'see no evil monkey',
  },
};

const Reveal = () => {
  const { killed, players } = useSelector((state) => state.game);
  if (!killed.length)
    return (
      <Container>
        <h2>no one died</h2>
        <Space size="1em" />
        <Emoji emoji="🤷" label="person shrugging" size="5em" />
        <LoadingBar />
      </Container>
    );

  const { role, name: username, emoji: user_emoji, isDead } =
    players.find((player) => player.id === killed[0]) || {};

  const { name, emoji } = role ? ROLES[role] : NOT_KILLER;
  return (
    <Container>
      <h2>
        {user_emoji} {username} {isDead ? 'was' : 'is'}
      </h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <LoadingBar />
    </Container>
  );
};

export default Reveal;
