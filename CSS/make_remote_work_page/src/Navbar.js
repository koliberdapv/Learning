import logo from './images/logo.svg';
import icon_menu from './images/icon-menu.svg';

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <nav>
      <div className="nav-content-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="snap-logo" />
        </div>
        <button className="navbar-btn" onClick={() => setIsSidebarOpen(true)}>
          <img src={icon_menu} alt="menu-button" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
