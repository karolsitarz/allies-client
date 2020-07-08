import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MSG from 'util/msg';
import useSocket from 'hooks/useSocket';
import Input from 'components/Input';
import Button from 'components/Button';
import Container from 'components/Container';
import Space from 'components/Space';
import Emoji from 'components/Emoji';
import EmojiInput from 'components/EmojiInput';
import ThemeToggle from 'components/ThemeToggle';
import { StyledForm } from 'components/Container';
import Loading from 'components/Loading';

const DEFAULT_EMOJI = '😀';
const DEFAULT_NAME = '';

const Login = () => {
  const [input, setInput] = useState(DEFAULT_NAME);
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);
  const [, openSocket] = useSocket();
  const { isLoading } = useSelector((state) => state.socket);

  useEffect(() => {
    const name = localStorage.getItem('name') || DEFAULT_NAME;
    const emoji = localStorage.getItem('emoji') || DEFAULT_EMOJI;
    setInput(name);
    setEmoji(emoji);
  }, []);

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
    localStorage.setItem('name', input);
    localStorage.setItem('emoji', emoji);
  };

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <h1>
        hi there! <Emoji emoji="👋" label="waving hand" />
      </h1>
      <h3>what&apos;s your name?</h3>
      <Space size="2em" />
      <EmojiInput value={emoji} onChange={(emoji) => setEmoji(emoji)} />
      <StyledForm onSubmit={handleOnSubmit}>
        <Input placeholder="name" value={input} onChange={handleOnChange} />
        <Button primary type="submit">
          Jump in!
        </Button>
      </StyledForm>
      <ThemeToggle />
    </Container>
  );
};

export default Login;
