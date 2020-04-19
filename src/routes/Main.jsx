import React, { useState } from 'react';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/Container';
import Button from 'components/Button';
import Input from 'components/Input';
import Space from 'components/Space';
import ThemeToggle from 'components/ThemeToggle';
import { StyledForm } from 'components/Container';

const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Main = () => {
  const [input, setInput] = useState('');
  const [socket] = useSocket();

  const handleOnChange = (e) => {
    if (!e || !e.target) return;
    const value = e.target.value.toUpperCase();
    if (!ALLOWED_CHARS.includes(value.substr(-1))) return;
    if (value.length > 5) return;
    setInput(value);
  };
  const handleOnJoin = (e) => {
    e.preventDefault();
    if (input.length !== 5) return;
    socket.comm(MSG.ROOM.JOIN, input);
  };
  const handleOnCreate = (e) => {
    e.preventDefault();
    socket.comm(MSG.ROOM.CREATE);
  };

  return (
    <Container>
      <h2>join a room:</h2>
      <Space size="1em" />
      <StyledForm onSubmit={handleOnJoin}>
        <Input
          placeholder="room code"
          value={input}
          onChange={handleOnChange}
        />
        <Button primary type="submit">
          Join
        </Button>
      </StyledForm>
      <Space size="2em" />
      <Button onClick={handleOnCreate}>...or create a new one</Button>
      <ThemeToggle />
    </Container>
  );
};

export default Main;
