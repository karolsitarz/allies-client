import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Box, Button, Heading, TextInput } from 'grommet';

import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';

const StyledInput = styled(TextInput)`
  margin: 3em 0 1em;
`;
const StyledForm = styled.form`
  text-align: center;
`;

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [, openSocket] = useSocket();

  const handleOnChange = (e) => {
    if (!e || !e.target) return;
    const { value } = e.target;
    if (value.length > 20) return;
    setInput(value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(setRoute(ROUTES.LOADING));
    const socket = await openSocket();
    socket.comm(MSG.LOGIN, input);
  };

  return (
    <Box justify="center" align="center" fill>
      <Heading margin="none">Hi there! 👋</Heading>
      <Heading margin="none" level="3">
        What&apos;s your name?
      </Heading>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledInput name="name" value={input} onChange={handleOnChange} />
        <Button type="submit" primary label="Jump in!" />
      </StyledForm>
    </Box>
  );
};

export default Login;
