import { useState } from 'react';
import arrow_up from './images/icon-arrow-up.svg';
import arrow_down from './images/icon-arrow-down.svg';

const Company = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <a href="#" className="company" onClick={() => setIsOpen(!isOpen)}>
        Company
        <img src={isOpen ? `${arrow_up}` : `${arrow_down}`} alt="arrow" />
      </a>
      {isOpen && (
        <div className="company-wrapper">
          <a href="#">History</a>
          <a href="#">Our Team</a>
          <a href="#">Blog</a>
        </div>
      )}
    </>
  );
};

export default Company;
