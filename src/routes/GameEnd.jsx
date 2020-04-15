import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'components/form/Container';
import Space from 'components/form/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';

const Reveal = () => {
  const { gameEnd: role } = useSelector((state) => state.game);
  const { name, emoji } = ROLES[role];
  return (
    <Container fade grow padded>
      <h1>GAME OVER</h1>
      <h2>{name} won!</h2>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
    </Container>
  );
};

export default Reveal;
