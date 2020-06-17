import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ROLES from 'util/roles';

const SKIP_EMOJI = '⏭️';

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Role = styled.span`
  font-size: 0.65em;
  text-transform: uppercase;
  opacity: 0.75;
`;

const Name = styled.span`
  font-weight: bold;
  text-align: left;
`;

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

  background-color: ${({ isDead, theme }) => isDead && theme.alpha[3]};
  opacity: ${({ isDead }) => isDead && '0.4'};
  order: ${({ isDead }) => isDead && '10'};

  margin-bottom: ${({ isCurrent }) => isCurrent && '1.5em'};
  order: ${({ isCurrent }) => isCurrent && '-1'};
  order: ${({ skip }) => skip && '-2'};

  ${Name} {
    text-decoration: ${({ isDead }) => isDead && 'line-through'};
  }
`;

const Emoji = styled.span`
  margin-right: 0.5em;
  line-height: 1em;

  &::before {
    content: ${({ isHost }) => isHost && '"👑"'};
    position: absolute;
    font-size: 0.5em;
    top: 0;
    left: 0;
    line-height: 0em;
    transform: rotate(-30deg);
  }
`;

const Filler = styled.div`
  flex-grow: 1;
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
  role,
  emoji,
  isMostVoted,
  isDead,
  isCurrent,
  isHost,
  children,
  onClick,
}) => (
  <StyledPlayer
    isMostVoted={isMostVoted}
    isDead={isDead}
    isCurrent={isCurrent}
    onClick={onClick}
  >
    <Emoji isHost={isHost}>{emoji}</Emoji>
    <Texts>
      <Name>{name}</Name>
      {role != null && <Role>{role ? ROLES[role].name : '???'}</Role>}
    </Texts>
    <Filler />
    {children}
  </StyledPlayer>
);

export default Player;

Player.propTypes = {
  name: PropTypes.string,
  role: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  emoji: PropTypes.string,
  isMostVoted: PropTypes.bool,
  isDead: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isHost: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export const Skip = ({ isMostVoted, onClick, children }) => (
  <StyledPlayer isMostVoted={isMostVoted} onClick={onClick} skip>
    <Emoji>{SKIP_EMOJI}</Emoji>
    <Texts>
      <Name>skip</Name>
    </Texts>
    <Filler />
    {children}
  </StyledPlayer>
);

Skip.propTypes = {
  isMostVoted: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
