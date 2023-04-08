import logo from './images/logo.svg';
import geo from './images/icon-location.svg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container | grid gap_20 width1100">
        <picture className="footer__content_logo">
          <img src={logo} alt="Fylo" />
        </picture>
        <div className="footer__content | grid gap_25">
          <div className="footer__content_info | grid gap_15">
            <div
              id="geo"
              className="footer__content_info_single_line | grid gap_15"
            >
              <picture>
                <img src={geo} alt="location mark" />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="footer__content_info_single_line | grid gap_15">
              <picture>
                <img src={phone} alt="phone" />
              </picture>
              <p>+1-543-123-4567</p>
            </div>

            <div className="footer__content_info_single_line | grid gap_15">
              <picture>
                <img src={email} alt="email" />
              </picture>
              <p>example@fylo.com</p>
            </div>
          </div>

          <ul className="footer__content_links links | grid gap_10">
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">jobs</a>
            </li>
            <li>
              <a href="#">press</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>

          <ul className="footer__content_links links | grid gap_10">
            <li>
              <a href="#">contact us</a>
            </li>
            <li>
              <a href="#">terms</a>
            </li>
            <li>
              <a href="#">privacy</a>
            </li>
          </ul>

          <div className="footer__content_socials links | flex gap_10">
            <a href="#" className="single_social_wrapper | grid">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className="single_social_wrapper | grid">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#" className="single_social_wrapper | grid">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
