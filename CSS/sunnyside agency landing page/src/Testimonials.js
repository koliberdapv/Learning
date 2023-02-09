import emily from './images/image-emily.jpg';
import thomas from './images/image-thomas.jpg';
import jennie from './images/image-jennie.jpg';

const Testimonials = () => {
  return (
    <article className="testimonials">
      <h4>client testimonials</h4>
      <section className="testimonials-wrapper">
        <div className="single-testimonial">
          <figure className="avatar-wrapper">
            <img src={emily} alt="emily" />
          </figure>
          <p className="quote">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="person-info">
            <p className="person-name">emily r.</p>
            <p className="job-position">marketing director</p>
          </div>
        </div>

        <div className="single-testimonial">
          <figure className="avatar-wrapper">
            <img src={thomas} alt="thomas" />
          </figure>
          <p className="quote">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className="person-info">
            <p className="person-name">thomas s.</p>
            <p className="job-position">cheif operating officer</p>
          </div>
        </div>

        <div className="single-testimonial">
          <figure className="avatar-wrapper">
            <img src={jennie} alt="jennie" />
          </figure>
          <p className="quote">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="person-info">
            <p className="person-name">jennie f.</p>
            <p className="job-position">business owner</p>
          </div>
        </div>
      </section>
    </article>
  );
};
export default Testimonials;
