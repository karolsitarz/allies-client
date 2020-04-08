import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  <Container>
    <Spinner />
  </Container>
);

export default Loading;
