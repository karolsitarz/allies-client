import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MSG from 'util/msg';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';
import Container from 'components/form/Container';
import Button from 'components/form/Button';
import Input from 'components/form/Input';
import Space from 'components/form/Space';

const Main = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    socket.receive(MSG.ROOM.JOIN, (id) => {
      dispatch(setRoute(ROUTES.ROOM.LOBBY, { id }));
    });
  }, []);

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
      <Button onClick={handleOnCreate}>...or create a new one</Button>
    </Container>
  );
};

export default Main;
