import React, { useState } from 'react';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
import Button from 'components/form/Button';
import Input from 'components/form/Input';
import Space from 'components/form/Space';

const Main = () => {
  const [input, setInput] = useState('');
  const [socket] = useSocket();

  const handleOnChange = (e) => {
    if (!e || !e.target) return;
    const { value } = e.target;
    if (value.length > 6) return;
    setInput(value.toUpperCase());
  };
  const handleOnJoin = (e) => {
    e.preventDefault();
    if (input.length !== 6) return;
    socket.comm(MSG.ROOM.JOIN, input);
  };
  const handleOnCreate = (e) => {
    e.preventDefault();
    socket.comm(MSG.ROOM.CREATE);
  };

  return (
    <Container fade>
      <h1>Join a room:</h1>
      <Space size="1em" />
      <Container as="form" onSubmit={handleOnJoin}>
        <Input
          placeholder="room code"
          value={input}
          onChange={handleOnChange}
        />
        <Button primary type="submit">
          Join
        </Button>
      </Container>
      <Space size="2em" />
      <Button onClick={handleOnCreate}>...or create a room</Button>
    </Container>
  );
};

export default Main;