import logo from './images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content | flex centered space_out">
        <picture className="header__content_logo">
          <img src={logo} alt="Fylo" />
        </picture>
        <ul className="header__content_links | flex gap_10">
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">team</a>
          </li>
          <li>
            <a href="#">sing in</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
