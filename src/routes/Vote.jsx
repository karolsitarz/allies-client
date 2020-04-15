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
  border-radius: 0.5em;
  margin-bottom: 0.25em;
  box-shadow: 0 1em 2em 0px #00000014;

  background-color: ${({ isMostVoted }) => isMostVoted && '#ffff0011'};

  margin-bottom: ${({ isPlayer }) => isPlayer && '1.5em'};
  order: ${({ isPlayer }) => isPlayer && '-1'};

  background-color: ${({ isDead, theme }) => isDead && theme.alpha[3]};
  opacity: ${({ isDead }) => isDead && '0.4'};
  order: ${({ isDead }) => isDead && '10'};
`;

const Emoji = styled.span`
  margin-right: 0.5em;
`;

const LastVotes = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  > span {
    margin-left: -0.75em;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
  overflow-y: scroll;
  flex-basis: 0;
`;

const Room = () => {
  const [socket] = useSocket();
  const userID = useSelector((state) => state.socket.id);
  const { players, role, isVoteValid } = useSelector((state) => state.game);

  const handleOnVote = (id) => socket.comm(MSG.GAME.VOTE, id);

  return (
    <Container fade grow padded>
      <h3>vote</h3>
      <PlayerContainer>
        {players &&
          players.map(({ id, name, voted, isMostVoted, emoji, isDead }) => (
            <Player
              isPlayer={userID === id}
              isMostVoted={isMostVoted}
              isDead={isDead}
              key={id}
              onClick={() => handleOnVote(id)}
            >
              <Emoji>{emoji}</Emoji>
              {name}{' '}
              <LastVotes>
                {voted.map(({ id, emoji }) => (
                  <span key={`voted-${id}`}>{emoji}</span>
                ))}
              </LastVotes>
            </Player>
          ))}
      </PlayerContainer>
      <Space size="1em" />
    </Container>
  );
};

export default Room;
