import phones from './images/illustration-phones.svg';
import circles from './images/bg-pattern-circles.svg';

const StateOfArt = () => {
  return (
    <section className="art-wrapper">
      <figure className="phones-wrapper">
        <img src={phones} alt="phones" className="phones" />
      </figure>
      <article className="art-info">
        <div className="art-title">State of the Art Infrasctucture</div>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone of ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </article>
    </section>
  );
};
export default StateOfArt;
