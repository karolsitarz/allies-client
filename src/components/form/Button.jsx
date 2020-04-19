import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.label`
  border-radius: 5em;
  overflow: hidden;
  padding: ${({ $content, compact }) =>
    typeof $content === 'string'
      ? compact
        ? '0.75em 0.7em 0.75em 1em'
        : '0.75em 2.7em 0.75em 3em'
      : '1em 1.5em'};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.65em;
  letter-spacing: 0.1em;
  cursor: pointer;
  border: 0;
  transition: ${({ theme }) => theme.transition()};
  display: inline-flex;
  text-align: center;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.alpha[1]};
  background-image: ${({ theme, primary }) =>
    primary && theme.gradient.primary};
  opacity: ${({ disabled }) => disabled && '0.5'};
  pointer-events: ${({ disabled }) => disabled && 'none'};

  color: ${({ theme, primary }) => (primary ? theme.base[1] : theme.main[2])};
  fill: ${({ theme, primary }) => (primary ? theme.base[1] : theme.main[2])};

  & svg {
    height: 1em;
    pointer-events: none;
  }
`;

const HiddenButton = styled.button`
  position: fixed;
  visibility: hidden;
  pointer-events: none;
`;

const Button = ({ onClick, primary, children, type, disabled, compact }) => {
  return (
    <StyledButton
      compact={compact}
      primary={primary}
      $content={children}
      disabled={disabled}
    >
      {children}
      <HiddenButton onClick={onClick} type={type} />
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};
