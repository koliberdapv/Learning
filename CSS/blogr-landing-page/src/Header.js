import Navbar from './Navbar';

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className="header-wrapper">
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <section className="hero-section">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="hero-buttons-wrapper">
          <button type="button" className="btn start-btn">
            Start for Free
          </button>
          <button type="button" className="btn learn-btn">
            Learn More
          </button>
        </div>
      </section>
    </header>
  );
};
export default Header;
