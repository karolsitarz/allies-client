import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';

const Casualties = ({ killed }) => {
  const { players } = useSelector((state) => state.game);

  if (!killed) return null;
  if (!killed.length) return null;
  return (
    <>
      <Space size="2em" />
      <h3>total casualties:</h3>
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
      <Container>
        <h2>you are</h2>
        <h1>DEAD!</h1>
        <Space size="1em" />
        <Emoji emoji="💀" label="skull" size="5em" />
        {killed.length > 1 && <Casualties killed={killed} />}
      </Container>
    );

  if (isDead)
    return (
      <Container>
        <Emoji emoji="👻" label="ghost" size="5em" />
        <Casualties killed={killed} />
      </Container>
    );

  return (
    <Container>
      <h2>you are</h2>
      <h1>SAFE!</h1>
      <Space size="1em" />
      <Emoji emoji="😌" label="relieved face" size="5em" />
      <Casualties killed={killed} />
    </Container>
  );
};

export default NightEnd;
