import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';
import LoadingBar from 'components/LoadingBar';

const Casualties = ({ killed }) => {
  const { players } = useSelector((state) => state.game);

  if (!killed) return null;
  if (!killed.length) return null;
  return (
    <>
      <Space size="2em" />
      <h3>Total casualties:</h3>
      {killed.map((id) => {
        const { name, emoji } = players.find((player) => player.id === id);
        return (
          <span key={`killed-${id}`}>
            {emoji} {name}
          </span>
        );
      })}
    </>
  );
};

Casualties.propTypes = {
  killed: PropTypes.array,
};

const NightEnd = () => {
  const userID = useSelector((state) => state.socket.id);
  const { isKilled, killed = [], players = [] } = useSelector(
    (state) => state.game
  );
  const { isDead } = players.find((player) => player.id === userID);

  if (isKilled)
    return (
      <Container fade grow padded>
        <h2>You are...</h2>
        <h1>DEAD!</h1>
        <Space size="1em" />
        <Emoji emoji="💀" label="skull" size="5em" />
        {killed.length > 1 && <Casualties killed={killed} />}
        <LoadingBar />
      </Container>
    );

  if (isDead)
    return (
      <Container fade grow padded>
        <h2>You are...</h2>
        <h1>DEAD!</h1>
        <i>...well, yeah. We&apos;ve already estabilished that.</i>
        <Space size="1em" />
        <Emoji emoji="💀" label="skull" size="5em" />
        <Casualties killed={killed} />
        <LoadingBar />
      </Container>
    );

  return (
    <Container fade grow padded>
      <h2>You are...</h2>
      <h1>SAFE!</h1>
      <Space size="1em" />
      <Emoji emoji="😌" label="relieved face" size="5em" />
      <Casualties killed={killed} />
      <LoadingBar />
    </Container>
  );
};

export default NightEnd;
