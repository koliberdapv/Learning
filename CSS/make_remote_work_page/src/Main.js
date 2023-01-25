import hero_desktop from './images/image-hero-desktop.png';
import hero_mobile from './images/image-hero-mobile.png';
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';

const Main = () => {
  return (
    <main>
      <div className="main-content-wrapper">
        <div className="hero-image-wrapper">
          <img src={hero_desktop} className="hero-desktop" alt="hero-image" />
          <img src={hero_mobile} className="hero-mobile" alt="hero-image" />
        </div>
        <div className="hero-content">
          <h1>Make remote work</h1>
          <p className="hero-info">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="hero-btn">Learn more</button>
          <div className="ads-wrapper">
            <img src={databiz} alt="ads" />
            <img src={audiophile} alt="ads" />
            <img src={meet} alt="ads" />
            <img src={maker} alt="ads" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
