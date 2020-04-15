import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const timePass = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

const StyledTimeBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 0.25em;
  transform-origin: left center;
  background: ${({ theme }) => theme.gradient.primary};
  animation: ${timePass} ${({ time = 5000 }) => `${time}ms`} linear both;
`;

const TimeBar = ({ time }) => <StyledTimeBar time={time} />;

export default TimeBar;

TimeBar.propTypes = {
  time: PropTypes.number,
};
