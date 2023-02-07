import egg_desktop from './images/desktop/image-transform.jpg';
import egg_mobile from './images/mobile/image-transform.jpg';
import glass_desktop from './images/desktop/image-stand-out.jpg';
import glass_mobile from './images/mobile/image-stand-out.jpg';
import cherry_desktop from './images/desktop/image-graphic-design.jpg';
import cherry_mobile from './images/mobile/image-graphic-design.jpg';
import orange_desktop from './images/desktop/image-photography.jpg';
import orange_mobile from './images/mobile/image-photography.jpg';

const Main = () => {
  return (
    <main className="main-wrapper">
      <figure className="main-image egg">
        <img src={egg_mobile} alt="egg" className="mobile" />
        <img src={egg_desktop} alt="egg" className="desktop" />
      </figure>

      <article className="main-info egg-text">
        <h2>Transform your brand</h2>
        <p>
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients throught complelling visuals that do
          most of the marketing for you.
        </p>
        <button type="button" className="info-btn">
          learn more
          <div className="underline underline-egg"></div>
        </button>
      </article>

      <figure className="main-image cup">
        <img src={glass_mobile} alt="glass" className="mobile" />
        <img src={glass_desktop} alt="glass" className="desktop" />
      </figure>

      <article className="main-info cup-text">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <button type="button" className="info-btn">
          learn more
          <div className="underline"></div>
        </button>
      </article>

      <article className="main-article graphic-designs">
        <img src={cherry_mobile} alt="cherry" className="mobile" />
        <img src={cherry_desktop} alt="cherry" className="desktop" />
        <div className="article-info">
          <h3>graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that undercores
            your brand message and captures potential clients' attention.
          </p>
        </div>
      </article>

      <article className="main-article photography">
        <img src={orange_mobile} alt="orange" className="mobile" />
        <img src={orange_desktop} alt="orange" className="desktop" />
        <div className="article-info">
          <h3>photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </article>
    </main>
  );
};
export default Main;
