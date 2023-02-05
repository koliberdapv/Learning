import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import header_mobile from './images/mobile/image-header.jpg';
import header_desktop from './images/desktop/image-header.jpg';
import arrow from './images/icon-arrow-down.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-wrapper">
          <img src={logo} alt="sunnyside" />
        </div>
        <div className="links-wrapper">
          <a href="#">about</a>
          <a href="#">services</a>
          <a href="#">projects</a>
          <button type="button" className="nav-btn">
            contact
          </button>
        </div>
        <button type="button" className="hamburger-btn">
          <img src={hamburger} alt="See more" />
        </button>
      </nav>
      <article className="header-image-content">
        <div className="header-image-wrapper">
          <img
            src={header_mobile}
            alt="image"
            className="header-image-mobile"
          />
          <img
            src={header_desktop}
            alt="image"
            className="header-image-desktop"
          />
        </div>
        <div className="header-title">
          <h1>we are creatives</h1>
          <div className="arrow-wrapper">
            <img src={arrow} alt="arrow down" />
          </div>
        </div>
      </article>
    </header>
  );
};
export default Header;
