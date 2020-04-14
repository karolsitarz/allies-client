import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmojiContainer = styled.span`
  font-size: ${({ size }) => size};
`;

const Emoji = ({ label, emoji, size }) => (
  <EmojiContainer role="img" aria-label={label} size={size}>
    {emoji}
  </EmojiContainer>
);

export default Emoji;

Emoji.propTypes = {
  label: PropTypes.string,
  emoji: PropTypes.string,
  size: PropTypes.string,
};
