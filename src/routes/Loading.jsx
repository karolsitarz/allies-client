import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from 'grommet';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 2em;
  height: 2em;
  background: blueviolet;
  animation: ${spinning} 1.5s linear infinite;
`;

const Loading = () => (
  <Box justify="center" align="center" fill>
    <Spinner />
  </Box>
);

export default Loading;
