import Logo from './Logo';
import hamburger from './images/icon-hamburger.svg';
import Links from './Links';

const Nav = ({ setIsAsideOpen }) => {
  const handleClick = () => {
    setIsAsideOpen(true);
  };

  return (
    <nav className="nav | flex">
      <Logo />
      <article className="links | flex ">
        <Links />
      </article>
      <button type="button" className="nav_btn" onClick={handleClick}>
        <img src={hamburger} alt="menu" />
      </button>
    </nav>
  );
};
export default Nav;
