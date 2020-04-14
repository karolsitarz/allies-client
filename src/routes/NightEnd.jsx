import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';

const NightEnd = () => {
  const { isKilled, killedList } = useSelector((state) => state.game);
  if (isKilled)
    return (
      <Container fade grow padded>
        <h2>You are...</h2>
        <h1>DEAD!</h1>
        <Space size="1em" />
        <Emoji emoji="💀" label="skull" size="5em" />
        <Space size="2em" />
        <h3>Total casualties:</h3>
        {killedList.map(({ id, name }) => (
          <span key={`killed-${id}`}>{name}</span>
        ))}
      </Container>
    );

  return (
    <Container fade grow padded>
      <h2>You are...</h2>
      <h1>SAFE!</h1>
      <Space size="1em" />
      <Emoji emoji="😌" label="relieved face" size="5em" />
      <Space size="2em" />
      <h3>Total casualties:</h3>
      {killedList.map(({ id, name }) => (
        <span key={`killed-${id}`}>{name}</span>
      ))}
    </Container>
  );
};

export default NightEnd;
