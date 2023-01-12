import React from 'react';
import data from './data';

const Notification = ({ info }) => {
  const {
    id,
    name,
    image,
    action,
    action_is_group,
    action_subject,
    time,
    message,
    post,
  } = info;
  return (
    <div className={`${post ? 'refers-to-post notification' : 'notification'}`}>
      <div className="avatar-wrapper">
        <img src={image} alt="person" />
      </div>
      <div className="notification-content">
        <div className="notification-info">
          <span className="person-name">{name}</span>
          <span className="action">{action}</span>
          <span
            className={`${
              action_is_group ? 'action-subject link' : 'action-subject'
            }`}
          >
            {action_subject}
          </span>
          <div className="dot"></div>
          <p className="time">{time}</p>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
      {post && (
        <div className="post-wrapper">
          <img src={post} alt="post" />
        </div>
      )}
    </div>
  );
};

export default Notification;
