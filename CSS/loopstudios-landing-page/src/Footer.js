import Links from './Links';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content | grid">
          <Logo />
          <div className="links | grid center no_gap madia_flex">
            <Links />
          </div>
          <Socials />
          <div className="copyright">
            &#169; 2023 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
