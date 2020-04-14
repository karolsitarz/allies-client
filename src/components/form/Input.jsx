import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInputSpan = styled.span`
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding-left: 0.2em;
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition()};
  transform: translate3d(-50%, -50%, 0);
  opacity: 0.8;
  color: ${({ theme }) => theme.main[1]};

  &::before {
    content: '';
    background: ${({ theme }) => theme.gradient.light};
    position: absolute;
    width: calc(100% + 2em);
    height: calc(100% + 0.5em);
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 100px;
    transition: ${({ theme }) => theme.transition({ t: ['opacity'] })};
    opacity: 0;
  }
`;
const StyledTextInput = styled.input`
  border-radius: 0.75em;
  overflow: hidden;
  padding: 0.75em 1.95em 0.75em 2em;
  display: inline-block;
  color: ${({ theme }) => theme.main[2]};
  background-color: ${({ theme }) => theme.alpha[2]};
  border: 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.8em;
  max-width: 300px;
  margin: 0.5em 0;

  &:focus + span,
  &:not(:placeholder-shown) + span {
    transform: translate3d(-50%, -2em, 0) scale(0.75);
    opacity: 1;
  }
  &:focus + span::before,
  &:not(:placeholder-shown) + span::before {
    opacity: 1;
  }
`;

const Input = ({ placeholder, onChange, value, type, maxLength }) => {
  return (
    <label>
      <StyledTextInput
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        placeholder=" "
      />
      {placeholder && <TextInputSpan>{placeholder}</TextInputSpan>}
    </label>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['text', 'url', 'password', 'email']),
  maxLength: PropTypes.number,
};
