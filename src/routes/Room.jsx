import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MSG from 'util/msg';
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
`;

const Emoji = styled.span`
  margin-right: 0.5em;
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
`;

const Room = () => {
  const [socket] = useSocket();
  const { id, players } = useSelector((state) => state.room);
  const userID = useSelector((state) => state.socket.id);

  const handleLeave = () => {
    socket.comm(MSG.ROOM.LEAVE);
  };

  const handleStart = () => {
    socket.comm(MSG.GAME.START);
  };

  const isHost =
    players && players.find(({ isHost, id }) => isHost && id === userID);

  const canStartGame = players && players.length >= 4 && isHost;

  const onIdClick = () => {
    const el = document.createElement('textarea');
    el.value = id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <Container fade grow padded>
      <h2>
        Room <span onClick={onIdClick}>{id}</span>
      </h2>
      <Button onClick={handleLeave}>Leave</Button>
      <Space size="1em" />
      <PlayerContainer>
        {players &&
          players.map(({ id, name, emoji }) => (
            <Player key={id}>
              <Emoji>{emoji}</Emoji>
              {name}
            </Player>
          ))}
      </PlayerContainer>
      <Space size="1em" />
      <Button primary disabled={!canStartGame} onClick={handleStart}>
        Start
      </Button>
    </Container>
  );
};

export default Room;
