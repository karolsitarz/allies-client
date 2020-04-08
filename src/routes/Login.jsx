import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setSocket } from 'stores/socket';
import { setRoute, ROUTES } from 'stores/route';

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleOnChange = e => {
    if (!e || !e.target) return;
    const { value } = e.target;
    if (value.length > 20) return;
    setInput(value);
  }
  const handleOnSubmit = e => {
    e.preventDefault();
    const socket = new WebSocket(`ws://192.168.100.20:443`);
    dispatch(setSocket(socket))
    dispatch(setRoute(ROUTES.LOADING))
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={input} onChange={handleOnChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login;
