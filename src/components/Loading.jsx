import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: ${({ size }) => size || 2}em;
  height: ${({ size }) => size || 2}em;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  overflow: hidden;
  border: ${({ theme, size }) =>
    `${theme.gradient.mid} ${(size || 2) / 5}em solid`};
  border-top: ${({ size }) => `${(size || 2) / 5}em solid transparent`};
`;

export default Loading;
