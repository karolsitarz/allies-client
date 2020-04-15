import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';

const Reveal = () => {
  const { name: username, role } = useSelector((state) => state.game.reveal);
  const { name, emoji } = ROLES[role];
  return (
    <Container fade grow padded>
      <h2>{username} was...</h2>
      <h1>{name}</h1>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
    </Container>
  );
};

export default Reveal;