import logo from './images/logo.svg';
import icon_menu from './images/icon-menu.svg';
import arrow_up from './images/icon-arrow-up.svg';
import arrow_down from './images/icon-arrow-down.svg';
import { useGlobalContext } from './Context';

const Navbar = ({ setIsSidebarOpen }) => {
  const { displayFeatures, closeSubmenu, setIsSubmenuOpen } =
    useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('sub')) {
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
          <a href="#" className="features sub" onMouseOver={displayFeatures}>
            Features
            <img
              src={setIsSubmenuOpen ? `${arrow_up}` : `${arrow_down}`}
              alt="arrow"
            />
          </a>
          <a href="#" className="company sub" onMouseOver={displayFeatures}>
            Company
            <img
              src={setIsSubmenuOpen ? `${arrow_up}` : `${arrow_down}`}
              alt="arrow"
            />
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
