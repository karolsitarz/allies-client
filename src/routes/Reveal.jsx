import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';
import LoadingBar from 'components/LoadingBar';

const Reveal = () => {
  const { killed, players } = useSelector((state) => state.game);
  const { role, name: username, emoji: user_emoji } =
    players.find((player) => player.id === killed[0]) || {};
  const { name, emoji } = ROLES[role] || {};
  return (
    <Container fade grow padded>
      <h2>
        {user_emoji} {username} was...
      </h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <LoadingBar time={7500} />
    </Container>
  );
};

export default Reveal;
