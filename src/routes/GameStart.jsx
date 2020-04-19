import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';
import LoadingBar from 'components/LoadingBar';

const GameStart = () => {
  const { players } = useSelector((state) => state.game);
  const userID = useSelector((state) => state.socket.id);
  const { role } = players.find((player) => player.id === userID) || {};
  const { name, description, emoji } = ROLES[role] || {};
  return (
    <Container>
      <h2>your role is...</h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <Space size="2em" />
      <p>{description}</p>
      <LoadingBar time={10000} />
    </Container>
  );
};

export default GameStart;
