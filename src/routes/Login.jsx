import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';
import Input from 'components/form/Input';
import Button from 'components/form/Button';
import Container from 'components/form/Container';
import Space from 'components/form/Space';

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
    // loading
    const socket = await openSocket();
    socket.comm(MSG.LOGIN.PROMPT, input);
    socket.receive(MSG.LOGIN.SUCCESS, () => {
      dispatch(setRoute(ROUTES.MAIN));
    });
  };

  return (
    <Container fade>
      <h1>Hi there! 👋</h1>
      <h3>What&apos;s your name?</h3>
      <Space size="2em" />
      <Container as="form" onSubmit={handleOnSubmit}>
        <Input placeholder="name" value={input} onChange={handleOnChange} />
        <Button primary type="submit">
          Jump in!
        </Button>
      </Container>
    </Container>
  );
};

export default Login;
