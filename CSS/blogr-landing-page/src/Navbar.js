import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import icon_close from './images/icon-close.svg';
import arrow_light from './images/icon-arrow-light.svg';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isSubmenuOpen,
    setIsSubmenuOpen,
    submenuTarget,
    setSubmenuTarget,
    setLocation,
  } = useGlobalContext();

  const handleMenuBtn = () => {
    const btn = document.querySelector('.nav-btn');
    btn.classList.toggle('menu-open');
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e) => {
    const target = e.target.textContent;

    if (submenuTarget !== target) {
      setIsSubmenuOpen(true);
    }

    if (submenuTarget === target) {
      setIsSubmenuOpen(!isSubmenuOpen);
    }

    if (!submenuTarget) {
      setIsSubmenuOpen(true);
    }

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 15;
    setLocation({ center, bottom });

    setSubmenuTarget(target);

    const arrow = e.target.nextSibling;
    if (arrow) {
      arrow.classList.toggle('arrow-upside-down');
    }
  };

  return (
    <nav className="navbar-wrapper">
      <figure className="logo-wrapper">
        <img src={logo} alt="Blogr" className="logo-img" />
      </figure>

      <div className="nav-desktop">
        <ul className="links-wrapper">
          <li className="single-link">
            <a href="#" onClick={handleClick}>
              product
            </a>
            <img src={arrow_light} alt="arrow down" className="arrow-down" />
          </li>
          <li className="single-link">
            <a href="#" onClick={handleClick}>
              company
            </a>
            <img src={arrow_light} alt="arrow down" />
          </li>
          <li className="single-link">
            <a href="#" onClick={handleClick}>
              connect
            </a>
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
