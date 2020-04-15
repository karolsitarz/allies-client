import React from 'react';
import styled from 'styled-components';
import emojiRegex from 'emoji-regex';
import PropTypes from 'prop-types';

const EmojiInputComp = styled.input`
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  border: none;
  opacity: 0;
`;

const EmojiInputContainer = styled.label`
  width: 2.5em;
  height: 2.5em;
  border-radius: 25%;
  background-color: ${({ theme }) => theme.alpha[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    pointer-events: none;
    font-size: 1.5em;
  }
`;

const EmojiInput = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    if (!onChange) return;

    const { value } = e.target;
    const emoji = emojiRegex().exec(value);
    if (emoji && emoji[0]) onChange(emoji[0]);
  };
  return (
    <EmojiInputContainer>
      <span>{value}</span>
      <EmojiInputComp onChange={handleOnChange} value="" />
    </EmojiInputContainer>
  );
};

export default EmojiInput;

EmojiInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
