import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import arrowUp from './images/icon-up.svg';
import arrowDown from './images/icon-down.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content | grid gap_15">
          <article className="hero__card | grid gap_15" dataset-card="facebook">
            <div className="hero__card_title | flex gap_5">
              <picture>
                <img src={facebook} alt="facebook" />
              </picture>
              <p>@nathanf</p>
            </div>
            <div className="hero__card_followers | grid gap_5">
              <span>1987</span>
              <p>followers</p>
            </div>
            <div
              className="hero__card_trend | flex gap_5"
              dataset-dynamic="increase"
            >
              <picture className="grid">
                <img src={arrowUp} alt="arrow up" />
              </picture>
              <p>
                <span>12</span> today
              </p>
            </div>
          </article>

          <article className="hero__card | grid gap_15" dataset-card="twitter">
            <div className="hero__card_title | flex gap_5">
              <picture>
                <img src={twitter} alt="twitter" />
              </picture>
              <p>@nathanf</p>
            </div>
            <div className="hero__card_followers | grid gap_5">
              <span>1044</span>
              <p>followers</p>
            </div>
            <div
              className="hero__card_trend | flex gap_5"
              dataset-dynamic="increase"
            >
              <picture className="grid">
                <img src={arrowUp} alt="arrow up" />
              </picture>
              <p>
                <span>99</span> today
              </p>
            </div>
          </article>

          <article
            className="hero__card | grid gap_15"
            dataset-card="instagram"
          >
            <div className="hero__card_title | flex gap_5">
              <picture>
                <img src={instagram} alt="instagram" />
              </picture>
              <p>@realnathanf</p>
            </div>
            <div className="hero__card_followers | grid gap_5">
              <span>11k</span>
              <p>followers</p>
            </div>
            <div
              className="hero__card_trend | flex gap_5"
              dataset-dynamic="increase"
            >
              <picture className="grid">
                <img src={arrowUp} alt="arrow up" />
              </picture>
              <p>
                <span>1099</span> today
              </p>
            </div>
          </article>

          <article className="hero__card | grid gap_15" dataset-card="youtube">
            <div className="hero__card_title | flex gap_5">
              <picture>
                <img src={youtube} alt="youtube" />
              </picture>
              <p>Nathan F.</p>
            </div>
            <div className="hero__card_followers | grid gap_5">
              <span>8239</span>
              <p>subscribers</p>
            </div>
            <div
              className="hero__card_trend | flex gap_5"
              dataset-dynamic="decrease"
            >
              <picture className="grid">
                <img src={arrowDown} alt="arrow up" />
              </picture>
              <p>
                <span>144</span> today
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Hero;
