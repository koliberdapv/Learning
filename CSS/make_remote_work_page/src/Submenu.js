import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './Context';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();

  useEffect(() => {
    const submenu = document.querySelector('.submenu-features');
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <>
      <div
        className={`${
          isSubmenuOpen
            ? 'features-wrapper submenu-features show-submenu'
            : 'features-wrapper submenu-features'
        }`}
      >
        <img src={todo} alt="todo list" />
        <a href="#">Todo List</a>
        <img src={calendar} alt="todo list" />
        <a href="#">Calendar</a>
        <img src={reminders} alt="todo list" />
        <a href="#">Reminders</a>
        <img src={planning} alt="todo list" />
        <a href="#">Planning</a>
      </div>
    </>
  );
};

export default Submenu;
