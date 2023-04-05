import hero_img from './images/illustration-intro.png';
import bg from './images/bg-curvy-mobile.svg';
import bg_desktop from './images/bg-curvy-desktop.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content | grid gap_20">
          <picture className="hero__content_img">
            <img src={hero_img} alt="people getting files from a folder" />
          </picture>
          <article className="hero__content_info | grid gap_15">
            <h1 className="hero__content_info_title">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="hero__content_info_text">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and colaborate with friends,
              family, and co-workers.
            </p>
            <button className="hero__content_info_btn btn">get started</button>
          </article>
        </div>
      </div>
      <div className="background">
        <img src={bg} alt="" className="mobile" />
        <img src={bg_desktop} alt="" className="desktop" />
      </div>
    </section>
  );
};
export default Hero;
