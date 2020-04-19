import styled from 'styled-components';

const Space = styled.div`
  width: ${({ horizontal, size }) => horizontal && size};
  height: ${({ horizontal, size }) => !horizontal && size};
`;

export default Space;
