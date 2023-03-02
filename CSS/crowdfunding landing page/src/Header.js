import Links from './Links';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import btn_close from './images/icon-close-menu.svg';
import { useGlobalContext } from './Context';

const Header = () => {
  const { handleClickNavBtn } = useGlobalContext();
  return (
    <header className="header-wrapper">
      <nav className="navbar-wrapper">
        <picture className="logo-wrapper">
          <img src={logo} alt="crowdfund" className="logo" />
        </picture>
        <Links />
        <button type="button" className="nav-btn" onClick={handleClickNavBtn}>
          <img src={hamburger} alt="menu" className="aside-open-btn" />
          <img src={btn_close} alt="close menu" className="aside-close-btn" />
        </button>
      </nav>
    </header>
  );
};
export default Header;
