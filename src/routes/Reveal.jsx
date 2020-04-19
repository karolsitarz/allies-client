import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';
import LoadingBar from 'components/LoadingBar';

const Reveal = () => {
  const { killed, players } = useSelector((state) => state.game);
  if (!killed.length)
    return (
      <Container>
        <h2>no one died...</h2>
        <p>but soon someone is probably going to</p>
        <Space size="1em" />
        <Emoji emoji="🤷" label="person shrugging" size="5em" />
        <LoadingBar />
      </Container>
    );

  const { role, name: username, emoji: user_emoji } =
    players.find((player) => player.id === killed[0]) || {};
  const { name, emoji } = ROLES[role] || {};
  return (
    <Container>
      <h2>
        {user_emoji} {username} was...
      </h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <LoadingBar />
    </Container>
  );
};

export default Reveal;
