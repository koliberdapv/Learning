import logo from './images/logo.svg';
import icon_menu from './images/icon-menu.svg';
import Features from './Features';
import Company from './Company';

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <nav>
      <div className="nav-content-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="snap-logo" />
        </div>

        <div className="links-wrapper navbar-links">
          <Features />
          <Company />
          <a href="#">Careers</a>
          <a href="#">About</a>
        </div>
        <div className="buttons-wrapper navbar-btns">
          <button className="login-btn btn">Login</button>
          <button className="register-btn btn">Register</button>
        </div>

        <button className="navbar-btn" onClick={() => setIsSidebarOpen(true)}>
          <img src={icon_menu} alt="menu-button" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
