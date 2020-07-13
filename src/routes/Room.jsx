import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useSocket from 'hooks/useSocket';
import Container from 'components/Container';
import Button from 'components/Button';
import Space from 'components/Space';
import { PlayerContainer } from 'components/Player';
import Player from 'components/Player';
import { isDebug } from 'util/debug';
import Emoji from 'components/Emoji';
import Loading from 'components/Loading';
import play, { WAKE, loadSounds } from 'util/audio';
import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import { setLoading } from 'stores/room';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
`;

const Room = () => {
  const [socket] = useSocket();
  const dispatch = useDispatch();
  const { id, players = [], isLoading } = useSelector((state) => state.room);
  const userID = useSelector((state) => state.socket.id);
  const settings = useSelector((state) => state.settings);

  const min = Object.values(settings).reduce(
    (acc, role) => (role === true ? acc : role + acc),
    0
  );

  const handleLeave = () => socket.comm(MSG.ROOM.LEAVE);
  const handleStart = () => socket.comm(MSG.GAME.START);
  const isHost = players.find(({ isHost, id }) => isHost && id === userID);
  const isEveryoneReady = !players.find(({ isReady }) => !isReady);
  const canStartGame =
    players.length >= 4 && isEveryoneReady && players.length >= min;

  useEffect(() => {
    isDebug && socket.comm(MSG.ROOM.READY);
  }, [socket]);

  useMemo(() => {
    const loadSoundsPromise = async () => {
      const playerOrderNumber = players.findIndex(({ id }) => id === userID);
      if (playerOrderNumber === -1 || playerOrderNumber > 3) return;

      dispatch(setLoading(true));
      await loadSounds();
      dispatch(setLoading(false));
    };
    loadSoundsPromise();
  }, [players, userID, dispatch]);

  const onIdClick = () => {
    const el = document.createElement('textarea');
    el.value = id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const handleReady = () => socket.comm(MSG.ROOM.READY);
  const handleAudio = () => play(WAKE);
  const handleSettings = () => dispatch(setRoute(ROUTES.ROOM.SETTINGS));

  return (
    <Container>
      <BarContainer>
        <h2>
          room <span onClick={onIdClick}>{id}</span>
        </h2>
        <Button onClick={handleLeave}>exit</Button>
      </BarContainer>
      <Space size="1em" />
      <PlayerContainer>
        {players.map((player) => {
          const { id, isReady } = player;
          const isCurrent = userID === id;
          return (
            <Player key={id} isCurrent={isCurrent} {...player}>
              {isCurrent ? (
                isLoading ? (
                  <Loading size={1.5} />
                ) : (
                  <Button compact onClick={handleReady}>
                    {isReady ? 'not ready' : 'ready'}
                  </Button>
                )
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
          <BarContainer>
            <Button onClick={handleAudio}>
              <Emoji emoji="🔈" label="speaker" />
            </Button>
            {isLoading ? (
              <Loading />
            ) : (
              <Button primary disabled={!canStartGame} onClick={handleStart}>
                Start
              </Button>
            )}
            <Button onClick={handleSettings}>
              <Emoji emoji="⚙️" label="gear" />
            </Button>
          </BarContainer>
        </>
      )}
    </Container>
  );
};

export default Room;
