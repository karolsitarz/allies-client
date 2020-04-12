import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
import Button from 'components/form/Button';
import Space from 'components/form/Space';

const Room = () => {
  const dispatch = useDispatch();
  const [socket] = useSocket();
  const { id, players } = useSelector((state) => state.route.data);

  const handleLeave = () => {
    socket.comm(MSG.ROOM.LEAVE);
    socket.receive(MSG.ROOM.LEAVE, () => {
      dispatch(setRoute(ROUTES.MAIN));
    });
  };

  return (
    <Container fade>
      <h2>Room {id}</h2>
      <Button onClick={handleLeave}>Leave</Button>
      <Space size="1em" />
      <Container>
        {players.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </Container>
    </Container>
  );
};

export default Room;
