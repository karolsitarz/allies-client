import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyles, { getTheme } from 'style';
import Modals from 'components/Modals';
import Routes from 'routes';

const MainContainer = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: auto;
  color: ${({ theme }) => theme.main[1]};
`;

const App = () => {
  const isDark = useSelector((state) => state.theme);
  const theme = getTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <Routes />
      </MainContainer>
      <Modals />
    </ThemeProvider>
  );
};

export default App;
