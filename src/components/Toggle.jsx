import styled from 'styled-components';

const Toggle = styled.div`
  width: 3em;
  height: 1.5em;
  border-radius: 1.5em;
  background-color: ${({ theme }) => theme.alpha[1]};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.gradient.primary};
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    transition: ${({ theme }) => theme.transition()};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0.25em;
    top: 0.25em;
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background-color: ${({ theme, selected }) =>
      selected ? theme.base : theme.gradient.mid};
    transform: ${({ selected }) =>
      selected ? 'translateX(1.5em)' : 'translateX(0)'};
    transition: ${({ theme }) =>
      theme.transition({ properties: ['transform', 'background-color'] })};
  }
`;

export default Toggle;
