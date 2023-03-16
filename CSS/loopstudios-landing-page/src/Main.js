import mainImage from './images/mobile/image-interactive.jpg';
import mainImageDesktop from './images/desktop/image-interactive.jpg';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content | grid">
          <picture className="main__content_image">
            <img
              src={mainImage}
              alt="a man in VR glasses"
              className="main__content_image_mobile"
            />
            <img
              src={mainImageDesktop}
              alt="a man in VR glasses"
              className="main__content_image_desktop"
            />
          </picture>
          <article className="main__content_text | grid gap">
            <h2>the leader in interactive vr</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              throught digital experiences that bind to ther brand.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};
export default Main;
