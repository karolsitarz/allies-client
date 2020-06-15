import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import ROLES from 'util/roles';
import Button from 'components/Button';
import { setRoute, ROUTES } from 'stores/route';

const EndResult = () => {
  const { endResult } = useSelector((state) => state.game);
  const [socket] = useSocket();
  const dispatch = useDispatch();

  const handleBack = () => dispatch(setRoute(ROUTES.ROOM.LOBBY));
  const handleLeave = () => socket.comm(MSG.ROOM.LEAVE);

  if (endResult === 0)
    return (
      <Container>
        <h1>GAME OVER</h1>
        <h2>it&apos;s a tie!</h2>
        <Space size="1em" />
        <Emoji emoji="🤷" label="shrugging" size="5em" />
        <Space size="1em" />
        <Button onClick={handleBack} primary>
          Go back
        </Button>
        <Space size="0.5em" />
        <Button onClick={handleLeave}>Leave</Button>
      </Container>
    );

  const { name, emoji } = endResult === 1 ? ROLES.citizen : ROLES.killer;
  return (
    <Container>
      <h1>GAME OVER</h1>
      <h2>{name}s won!</h2>
      <Space size="1em" />
      <Emoji {...emoji} size="5em" />
      <Space size="1em" />
      <Button onClick={handleBack} primary>
        Go back
      </Button>
      <Space size="0.5em" />
      <Button onClick={handleLeave}>Leave</Button>
    </Container>
  );
};

export default EndResult;
