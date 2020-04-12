import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 1em, 0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ horizontal }) => !horizontal && 'column'};
  animation: ${({ fade }) =>
    fade &&
    css`
      ${fadeIn} 0.3s ease
    `};
`;

export default Container;
