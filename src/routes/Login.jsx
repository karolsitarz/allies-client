import React, { useState } from 'react';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Input from 'components/form/Input';
import Button from 'components/form/Button';
import Container from 'components/form/Container';
import Space from 'components/form/Space';

const Login = () => {
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
    if (!input.length) return;
    const socket = await openSocket();
    socket.comm(MSG.LOGIN.PROMPT, input);
  };

  return (
    <Container fade>
      <h1>
        Hi there!{' '}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </h1>
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
