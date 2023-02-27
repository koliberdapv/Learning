import logo from './images/logo.svg';
import Company from './Company';
import Connect from './Connect';
import Product from './Product';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <picture className="logo-wrapper">
        <img src={logo} alt="Blogr" className="logo-img" />
      </picture>

      <div className="footer-info">
        <p>Product</p>
        <Product />
      </div>
      <div className="footer-info">
        <p>Company</p>
        <Company />
      </div>
      <div className="footer-info">
        <p>Connect</p>
        <Connect />
      </div>
    </footer>
  );
};
export default Footer;
