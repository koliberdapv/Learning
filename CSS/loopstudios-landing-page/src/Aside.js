import Logo from './Logo';
import closeBtn from './images/icon-close.svg';
import Links from './Links';

const Aside = ({ setIsAsideOpen }) => {
  const handleClick = () => {
    setIsAsideOpen(false);
  };
  return (
    <aside className="aside">
      <div className="container">
        <div className="aside__content | grid">
          <div className="aside__content_header | flex">
            <Logo />
            <button type="button" className="nav_btn" onClick={handleClick}>
              <img src={closeBtn} alt="close" />
            </button>
          </div>
          <div className="aside__content_links | grid">
            <Links />
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
