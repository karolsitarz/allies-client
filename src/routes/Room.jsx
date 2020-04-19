import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/Container';
import Button from 'components/Button';
import Space from 'components/Space';
import { PlayerContainer } from 'components/Player';
import Player from 'components/Player';

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`;

const Room = () => {
  const [socket] = useSocket();
  const { id, players = [] } = useSelector((state) => state.room);
  const userID = useSelector((state) => state.socket.id);

  const handleLeave = () => socket.comm(MSG.ROOM.LEAVE);
  const handleStart = () => socket.comm(MSG.GAME.START);
  const isHost = players.find(({ isHost, id }) => isHost && id === userID);
  const isEveryoneReady = !players.find(({ isReady }) => !isReady);
  const canStartGame = players.length >= 4 && isEveryoneReady;

  const onIdClick = () => {
    const el = document.createElement('textarea');
    el.value = id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const handleReady = () => socket.comm(MSG.ROOM.READY);

  return (
    <Container>
      <TopContainer>
        <h2>
          room <span onClick={onIdClick}>{id}</span>
        </h2>
        <Button onClick={handleLeave}>exit</Button>
      </TopContainer>
      <Space size="1em" />
      <PlayerContainer>
        {players.map((player) => {
          const { id, isReady } = player;
          const isCurrent = userID === id;
          return (
            <Player key={id} isCurrent={isCurrent} {...player}>
              {isCurrent ? (
                <Button compact onClick={handleReady}>
                  {isReady ? 'not ready' : 'ready'}
                </Button>
              ) : (
                isReady && '✅'
              )}
            </Player>
          );
        })}
      </PlayerContainer>
      {isHost && (
        <>
          <Space size="1em" />
          <Button primary disabled={!canStartGame} onClick={handleStart}>
            Start
          </Button>
        </>
      )}
    </Container>
  );
};

export default Room;
