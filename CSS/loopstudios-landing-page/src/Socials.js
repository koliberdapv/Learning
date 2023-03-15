import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

const Socials = () => {
  return (
    <article className="socials | flex gap">
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={pinterest} alt="pinterest" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
    </article>
  );
};
export default Socials;
