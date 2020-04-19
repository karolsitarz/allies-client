import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTheme } from 'stores/theme';
import Emoji from './Emoji';

const StyledThemeToggle = styled.label`
  background-color: ${({ theme }) => theme.alpha[1]};
  width: 2em;
  height: 2em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeToggle = () => {
  const isDark = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <StyledThemeToggle onClick={() => dispatch(toggleTheme)}>
      {isDark ? (
        <Emoji emoji="🌙" label="moon" />
      ) : (
        <Emoji emoji="☀️" label="sun" />
      )}
    </StyledThemeToggle>
  );
};

export default ThemeToggle;

ThemeToggle.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};
