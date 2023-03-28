import React from "react";
import PropTypes from 'prop-types';
const Notification = ({ message, state }) => {

  return <p>{!state && message}</p>;
};

export default Notification;
Notification.prorTypes = {
  message: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
};