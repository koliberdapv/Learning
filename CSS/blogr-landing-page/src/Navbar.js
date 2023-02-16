import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import icon_close from './images/icon-close.svg';
import arrow_light from './images/icon-arrow-light.svg';
import arrow_dark from './images/icon-arrow-dark.svg';
import pattern_desktop from './images/bg-pattern-intro-desktop.svg';
import pattern_mobile from './images/bg-pattern-intro-mobile.svg';

const Navbar = ({ setIsMenuOpen, isMenuOpen }) => {
  const handleMenuBtn = () => {
    const btn = document.querySelector('.nav-btn');
    btn.classList.toggle('menu-open');
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar-wrapper">
      <figure className="logo-wrapper">
        <img src={logo} alt="Blogr" className="logo-img" />
      </figure>

      <div className="nav-desktop">
        <ul className="links-wrapper">
          <li className="single-link">
            <a href="#">product</a>
            <img src={arrow_light} alt="arrow down" className="arrow-down" />
          </li>
          <li className="single-link">
            <a href="#">company</a>
            <img src={arrow_light} alt="arrow down" className="arrow-down" />
          </li>
          <li className="single-link">
            <a href="#">connect</a>
            <img src={arrow_light} alt="arrow down" className="arrow-down" />
          </li>
        </ul>
        <div className="nav-buttons-wrapper">
          <button type="button" className="btn login-btn">
            login
          </button>
          <button type="button" className="btn sign-up-btn">
            sign up
          </button>
        </div>
      </div>

      <button
        type="button"
        className="nav-btn menu-open"
        onClick={handleMenuBtn}
      >
        <img src={hamburger} alt="open menu" className="icon-open-menu" />
        <img src={icon_close} alt="close menu" className="icon-close-menu" />
      </button>
    </nav>
  );
};
export default Navbar;
