import React from 'react';

const Header = () => {
  return (
    <header className="notifications-header">
      <h1>
        Notifications
        <span>3</span>
      </h1>
      <button className="header-btn">Mark all as read</button>
    </header>
  );
};
export default Header;
