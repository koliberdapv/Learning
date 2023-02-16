import Product from './Product';
import Company from './Company';
import Connect from './Connect';
import arrow_dark from './images/icon-arrow-dark.svg';
import { useState } from 'react';

const Aside = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const handleClick = (e) => {
    const target = e.target.textContent;
    setIsProductOpen(false);
    setIsCompanyOpen(false);
    setIsConnectOpen(false);

    if (target == 'Product') {
      setIsProductOpen(!isProductOpen);
    }
    if (target == 'Company') {
      setIsCompanyOpen(!isCompanyOpen);
    }
    if (target == 'Connect') {
      setIsConnectOpen(!isConnectOpen);
    }
  };

  return (
    <aside className="aside-wrapper">
      <button type="button" className="product-title btn" onClick={handleClick}>
        Product
        <img
          src={arrow_dark}
          alt="arrow"
          className={`${isProductOpen ? 'arrow-upside-down' : ''}`}
        />
      </button>
      {isProductOpen && <Product />}

      <button type="button" className="company-title btn" onClick={handleClick}>
        Company
        <img
          src={arrow_dark}
          alt="arrow"
          className={`${isCompanyOpen ? 'arrow-upside-down' : ''}`}
        />
      </button>
      {isCompanyOpen && <Company />}

      <button type="button" className="connect-title btn" onClick={handleClick}>
        Connect
        <img
          src={arrow_dark}
          alt="arrow"
          className={`${isConnectOpen ? 'arrow-upside-down' : ''}`}
        />
      </button>
      {isConnectOpen && <Connect />}

      <div className="divider"></div>
      <div className="aside-buttons-wrapper">
        <button type="button" className="btn login-btn-aside">
          login
        </button>
        <button type="button" className="btn sign-up-btn-aside">
          sign up
        </button>
      </div>
    </aside>
  );
};
export default Aside;
