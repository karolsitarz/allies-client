import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 1em, 0);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  text-align: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  text-align: center;
  flex-grow: 1;
  flex-direction: column;
  padding: 1em;
  animation: ${fadeIn} 0.3s ease;
`;

export default Container;
