import Nav from './Nav';

const Hero = ({ setIsAsideOpen }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content | flex column">
          <Nav setIsAsideOpen={setIsAsideOpen} />
          <div className="hero__title">
            <h1 className="hero__title_text">
              immersive <br className="title_br" />
              experiences <br className="title_br" />
              that <br className="title_br" /> deliver
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
