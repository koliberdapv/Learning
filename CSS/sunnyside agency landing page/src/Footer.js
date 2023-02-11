import logo from './images/logo.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="logo-wrapper-footer">
        <img src={logo} alt="sunnyside" className="logo-footer" />
      </div>
      <div className="links-wrapper-footer">
        <a href="#">about</a>
        <a href="#">services</a>
        <a href="#">projects</a>
      </div>
      <div className="socials-wrapper">
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={pinterest} alt="pinterest" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
