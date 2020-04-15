import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';
import LoadingBar from 'components/LoadingBar';

const Casualties = ({ killed }) => {
  if (!killed) return null;
  if (!killed.length) return null;
  return (
    <>
      <Space size="2em" />
      <h3>Total casualties:</h3>
      {killed.map(({ id, name, emoji }) => (
        <span key={`killed-${id}`}>
          {emoji} {name}
        </span>
      ))}
    </>
  );
};

Casualties.propTypes = {
  killed: PropTypes.array,
};

const NightEnd = () => {
  const { isKilled, killedList } = useSelector((state) => state.game);

  if (isKilled)
    return (
      <Container fade grow padded>
        <h2>You are...</h2>
        <h1>DEAD!</h1>
        <Space size="1em" />
        <Emoji emoji="💀" label="skull" size="5em" />
        {killedList && <Casualties killed={killedList} />}
      </Container>
    );

  return (
    <Container fade grow padded>
      <h2>You are...</h2>
      <h1>SAFE!</h1>
      <Space size="1em" />
      <Emoji emoji="😌" label="relieved face" size="5em" />
      {killedList && <Casualties killed={killedList} />}
      <LoadingBar />
    </Container>
  );
};

export default NightEnd;
