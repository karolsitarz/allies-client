import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
import Button from 'components/form/Button';
import Space from 'components/form/Space';

const Player = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0px #00000021;

  &::before {
    content: '';
    display: block;
    height: 1.5em;
    width: 1.5em;
    border-radius: 0.5em;
    background-color: #00000021;
    margin-right: 0.5em;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
`;

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

  const handleStart = () => {
    console.log(':D');
  };

  useEffect(() => {
    socket.receive(MSG.ROOM.UPDATE, (players) => {
      dispatch(setRoute(ROUTES.ROOM.LOBBY, { id, players }));
    });
  }, []);

  const isHost =
    players && players.find(({ isHost, id }) => isHost && id === socket.id);

  const canStartGame = players && players.length >= 4 && isHost;

  return (
    <Container fade grow padded>
      <h2>Room {id}</h2>
      <Button onClick={handleLeave}>Leave</Button>
      <Space size="1em" />
      <PlayerContainer>
        {players &&
          players.map(({ id, name }) => <Player key={id}>{name}</Player>)}
      </PlayerContainer>
      <Space size="1em" />
      <Button primary disabled={!canStartGame} onClick={handleStart}>
        Start
      </Button>
    </Container>
  );
};

export default Room;
