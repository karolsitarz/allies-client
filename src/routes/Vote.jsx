import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
import { PlayerContainer } from 'components/Player';
import Player from 'components/Player';

const Header = styled.h2`
  margin-bottom: 1em;
`;

const LastVotes = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  > span {
    margin-left: -0.75em;
  }
`;

const Room = () => {
  const [socket] = useSocket();
  const userID = useSelector((state) => state.socket.id);
  const { players = [], voteMessage } = useSelector((state) => state.game);

  const handleOnVote = (id) => socket.comm(MSG.GAME.VOTE, id);

  return (
    <Container fade grow padded>
      <Header>{voteMessage}</Header>
      <PlayerContainer>
        {players.map(({ id, name, voted, isMostVoted, emoji, isDead }) => (
          <Player
            key={id}
            isCurrent={userID === id}
            isMostVoted={isMostVoted}
            isDead={isDead}
            emoji={emoji}
            onClick={() => handleOnVote(id)}
          >
            {name}{' '}
            <LastVotes>
              {voted.map(({ id, emoji }) => (
                <span key={`voted-${id}`}>{emoji}</span>
              ))}
            </LastVotes>
          </Player>
        ))}
      </PlayerContainer>
    </Container>
  );
};

export default Room;
