import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';

const Sleep = () => {
  const userID = useSelector((state) => state.socket.id);
  const { players = [] } = useSelector((state) => state.game);
  const { isDead } = players.find((player) => player.id === userID);

  if (isDead)
    return (
      <Container>
        <h3>dead can&apos;t sleep</h3>
        <Space size="1em" />
        <Emoji emoji="👻" label="ghost" size="5em" />
      </Container>
    );

  return (
    <Container>
      <h1>sleep tight!</h1>
      <h3>no peeking!</h3>
      <Space size="1em" />
      <Emoji emoji="👁‍🗨" label="eye in a bubble" size="5em" />
    </Container>
  );
};

export default Sleep;
