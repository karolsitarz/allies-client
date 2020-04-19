import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/Container';
import { PlayerContainer } from 'components/Player';
import Player from 'components/Player';

const Header = styled.h2`
  margin-bottom: 1em;
`;

const LastVotes = styled.div`
  display: flex;
  flex-direction: row-reverse;
  > span {
    margin-left: -0.5em;
  }
`;

const Room = () => {
  const [socket] = useSocket();
  const userID = useSelector((state) => state.socket.id);
  const { players = [], voteMessage, tally } = useSelector(
    (state) => state.game
  );
  const { isDead } = players.find((player) => player.id === userID);
  const handleOnVote = (id) => {
    if (isDead) return;
    socket.comm(MSG.GAME.VOTE, id);
  };

  return (
    <Container fade grow padded>
      <Header>{voteMessage}</Header>
      <PlayerContainer>
        {players.map(({ id, name, voted, emoji, isDead, role }) => (
          <Player
            key={id}
            isCurrent={userID === id}
            isMostVoted={tally.includes(id)}
            isDead={isDead}
            emoji={emoji}
            name={name}
            role={role}
            onClick={() => handleOnVote(id)}
          >
            <LastVotes>
              {voted.map((id) => {
                const { emoji } = players.find((player) => player.id === id);
                return <span key={`voted-${id}`}>{emoji}</span>;
              })}
            </LastVotes>
          </Player>
        ))}
      </PlayerContainer>
    </Container>
  );
};

export default Room;
