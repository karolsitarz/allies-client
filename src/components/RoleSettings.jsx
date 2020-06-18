import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScrollInput from 'components/ScrollInput';
import ROLES from 'util/roles';
import Emoji from 'components/Emoji';
import Space from 'components/Space';

const range = (x, y) =>
  Array.from(
    (function* () {
      while (x <= y) yield x++;
    })()
  );

const NumInputContainer = styled.div`
  width: 3em;
  height: 1.75em;
  background-color: ${({ theme }) => theme.alpha[1]};
  overflow: hidden;
  border-radius: 0.75em;
  user-select: none;
  touch-action: none;
`;

const Value = styled.div`
  width: 3em;
  height: 1.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 0.9em;
`;

export const StaticValue = styled.div`
  width: 3em;
  height: 1.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: transparent;
  &::before {
    content: ${({ count }) => `"${count}"`};
    font-weight: bold;
    font-size: 0.9em;
    color: ${({ theme }) => theme.main[1]};
  }
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.15em 1em;
`;

export const RoleName = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const RoleSettings = ({ role, min = 0, max = 10, onSelect, initial }) => (
  <RoleContainer>
    <LeftContainer>
      <Emoji {...ROLES[role].emoji} />
      <Space horizontal size="0.5em" />
      <RoleName>{ROLES[role].name}</RoleName>
    </LeftContainer>
    <ScrollInput parent={NumInputContainer} onStop={onSelect} initial={initial}>
      {range(min, max).map((val) => (
        <Value key={val}>{val}</Value>
      ))}
    </ScrollInput>
  </RoleContainer>
);

export default RoleSettings;

RoleSettings.propTypes = {
  role: PropTypes.oneOf(Object.keys(ROLES)),
  min: PropTypes.number,
  max: PropTypes.number,
  onSelect: PropTypes.func,
  initial: PropTypes.number,
};

export const RoleStatic = ({ role, count }) => (
  <RoleContainer>
    <LeftContainer>
      <Emoji {...ROLES[role].emoji} />
      <Space horizontal size="0.5em" />
      <RoleName>{ROLES[role].name}</RoleName>
    </LeftContainer>
    <StaticValue count={count} />
  </RoleContainer>
);

RoleStatic.propTypes = {
  role: PropTypes.oneOf(Object.keys(ROLES)),
  count: PropTypes.number,
};
