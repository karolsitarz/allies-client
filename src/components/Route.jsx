import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Route = ({ to: To, from }) => {
  const { route } = useSelector((state) => state.route);
  if (route !== from) return null;
  return <To />;
};

export default Route;

Route.propTypes = {
  from: PropTypes.string,
  to: PropTypes.func,
};
