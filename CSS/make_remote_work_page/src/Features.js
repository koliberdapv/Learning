import { useState } from 'react';
import arrow_up from './images/icon-arrow-up.svg';
import arrow_down from './images/icon-arrow-down.svg';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';

const Features = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        className="features"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Features
        <img
          src={isSidebarOpen ? `${arrow_up}` : `${arrow_down}`}
          alt="arrow"
        />
      </a>
      {isSidebarOpen && (
        <div className="features-wrapper">
          <img src={todo} alt="todo list" />
          <a href="#">Todo List</a>
          <img src={calendar} alt="todo list" />
          <a href="#">Calendar</a>
          <img src={reminders} alt="todo list" />
          <a href="#">Reminders</a>
          <img src={planning} alt="todo list" />
          <a href="#">Planning</a>
        </div>
      )}
    </>
  );
};

export default Features;
