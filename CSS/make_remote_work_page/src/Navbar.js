import logo from './images/logo.svg';
import icon_menu from './images/icon-menu.svg';
import Features from './Features';
import Company from './Company';
import { useGlobalContext } from './Context';

const Navbar = ({ setIsSidebarOpen }) => {
  const { displayFeatures, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('features')) {
      closeSubmenu();
    }
  };

  return (
    <nav>
      <div className="nav-content-wrapper" onMouseOver={handleSubmenu}>
        <div className="logo-wrapper">
          <img src={logo} alt="snap-logo" />
        </div>

        <div className="links-wrapper navbar-links">
          <a href="#" className="features" onMouseOver={displayFeatures}>
            Features
          </a>
          <a href="#" className="Company" onMouseOver={displayFeatures}>
            Company
          </a>

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
