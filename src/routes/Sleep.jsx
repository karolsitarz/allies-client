import React from 'react';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';

const Sleep = () => {
  return (
    <Container fade grow padded>
      <h1>Sleep tight!</h1>
      <h3>No peeking!</h3>
      <Space size="2em" />
      <Emoji emoji="👁‍🗨" label="eye in a bubble" size="5em" />
    </Container>
  );
};

export default Sleep;
