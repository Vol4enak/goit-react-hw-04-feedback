import React from "react";

const Notification = ({ message, state }) => {
  return <p>{!state && message}</p>;
};

export default Notification;