import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import LoadingBar from 'components/LoadingBar';

const Sleep = () => {
  const userID = useSelector((state) => state.socket.id);
  const { players = [] } = useSelector((state) => state.game);
  const { isDead } = players.find((player) => player.id === userID);

  return (
    <Container fade grow padded>
      <h1>sleep tight!</h1>
      <h3>no peeking!</h3>
      {isDead && (
        <p>well, you&apos;re dead. no point in sleeping anymore, I guess...</p>
      )}
      <Space size="1em" />
      <Emoji emoji="👁‍🗨" label="eye in a bubble" size="5em" />
      {isDead && <LoadingBar />}
    </Container>
  );
};

export default Sleep;
