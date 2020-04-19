import React, { useState } from 'react';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Input from 'components/Input';
import Button from 'components/Button';
import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import EmojiInput from 'components/EmojiInput';
import ThemeToggle from 'components/ThemeToggle';

const Login = () => {
  const [input, setInput] = useState('');
  const [emoji, setEmoji] = useState('😀');
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
    socket.comm(MSG.LOGIN.PROMPT, { name: input, emoji });
  };

  return (
    <Container fade grow>
      <h1>
        hi there! <Emoji emoji="👋" label="waving hand" />
      </h1>
      <h3>what&apos;s your name?</h3>
      <Space size="2em" />
      <EmojiInput value={emoji} onChange={(emoji) => setEmoji(emoji)} />
      <Container as="form" onSubmit={handleOnSubmit}>
        <Input placeholder="name" value={input} onChange={handleOnChange} />
        <Button primary type="submit">
          Jump in!
        </Button>
      </Container>
      <ThemeToggle />
    </Container>
  );
};

export default Login;
