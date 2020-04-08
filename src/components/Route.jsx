import React from 'react';
import { useSelector } from 'react-redux';

const Route = ({ to: To, from }) => {
  const { route } = useSelector(state => state.route);
  if (route !== from) return null;
  return <To />;
}

export default Route;
