import laptop_mobile from './images/illustration-laptop-mobile.svg';
import laptop_desktop from './images/illustration-laptop-desktop.svg';

const AddInfo = () => {
  return (
    <section className="addinfo-wrapper">
      <figure className="addinfo-image-wrapper">
        <img src={laptop_mobile} alt="a laptop" className="laptop-mobile" />
        <img src={laptop_desktop} alt="a laptop" className="laptop-desktop" />
      </figure>
      <section className="addinfo-info">
        <article>
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supportsfeatures such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </article>
        <article>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straighforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </article>
      </section>
    </section>
  );
};
export default AddInfo;
