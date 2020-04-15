import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
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
  const [socket] = useSocket();
  const { players, role, isVoteValid } = useSelector((state) => state.game);

  const handleOnVote = (id) => socket.comm(MSG.GAME.VOTE, id);

  return (
    <Container fade grow padded>
      <h1>You are {role}</h1>
      <PlayerContainer>
        {players &&
          players.map(({ id, name, voted, isMostVoted }) => (
            <Player key={id} onClick={() => handleOnVote(id)}>
              {isMostVoted && ':DD '}
              {name}{' '}
              {voted.map((id) => (
                <span key={`voted-${id}`}>{id}</span>
              ))}
            </Player>
          ))}
      </PlayerContainer>
      <Space size="1em" />
    </Container>
  );
};

export default Room;
