import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPlayer = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  border-radius: 1em;
  margin-bottom: 0.25em;
  font-weight: bold;
  background-color: ${({ theme }) => theme.alpha[1]};

  box-shadow: ${({ isMostVoted, theme }) =>
    isMostVoted && `inset 0 0 0 3px ${theme.alpha[3]}`};

  margin-bottom: ${({ isCurrent }) => isCurrent && '1.5em'};
  order: ${({ isCurrent }) => isCurrent && '-1'};

  background-color: ${({ isDead, theme }) => isDead && theme.alpha[3]};
  opacity: ${({ isDead }) => isDead && '0.4'};
  order: ${({ isDead }) => isDead && '10'};
`;

const Emoji = styled.span`
  margin-right: 0.5em;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
  overflow-y: scroll;
  flex-basis: 0;
`;

const Player = ({
  name,
  emoji,
  isMostVoted,
  isDead,
  isCurrent,
  children,
  onClick,
}) => (
  <StyledPlayer
    isMostVoted={isMostVoted}
    isDead={isDead}
    isCurrent={isCurrent}
    onClick={onClick}
  >
    <Emoji>{emoji}</Emoji>
    {name} {children}
  </StyledPlayer>
);

export default Player;

Player.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string,
  isMostVoted: PropTypes.bool,
  isDead: PropTypes.bool,
  isCurrent: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
