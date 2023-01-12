import React from 'react';
import data from './data';
import Notification from './Notificaion';

const Notifications = () => {
  return (
    <section className="notifications-wrapper">
      {data.map((info, index) => {
        return <Notification info={info} key={index} />;
      })}
    </section>
  );
};

export default Notifications;
