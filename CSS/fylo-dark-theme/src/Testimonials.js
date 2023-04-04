import profile_1 from './images/profile-1.jpg';
import profile_2 from './images/profile-2.jpg';
import profile_3 from './images/profile-3.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__content | grid gap_25">
          <article className="single_testimonial | grid gap_10">
            <p>
              Fylo has improved our team productivity by an order of magniude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="single_testimonial_info | flex centered gap_10">
              <picture className="single_testimonial_info_avatar">
                <img src={profile_1} alt="Satish Patel" />
              </picture>
              <div className="single_testimonial_info_person | grid">
                <p className="single_testimonial_info_person_name">
                  Satish Patel
                </p>
                <p className="single_testimonial_info_person_title">
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </article>

          <article className="single_testimonial | grid gap_10">
            <p>
              Our inbound leads have grown so dramatically that we have hired a
              dedicated sales team that now only works on inbound leads. All
              thanks to Fylo.
            </p>
            <div className="single_testimonial_info | flex centered gap_10">
              <picture className="single_testimonial_info_avatar">
                <img src={profile_2} alt="Satish Patel" />
              </picture>
              <div className="single_testimonial_info_person | grid">
                <p className="single_testimonial_info_person_name">
                  Bruce McKenzie
                </p>
                <p className="single_testimonial_info_person_title">
                  Founder & CEO, Dyno
                </p>
              </div>
            </div>
          </article>

          <article className="single_testimonial | grid gap_10">
            <p>
              Fylo offers a powerful suite of tools that every marketing team
              must have. And if you get stuck, their support team will help out.
              I'm using Fylo to manage the entire inbound process.
            </p>
            <div className="single_testimonial_info | flex centered gap_10">
              <picture className="single_testimonial_info_avatar">
                <img src={profile_3} alt="Satish Patel" />
              </picture>
              <div className="single_testimonial_info_person | grid">
                <p className="single_testimonial_info_person_name">Iva Boyd</p>
                <p className="single_testimonial_info_person_title">
                  Founder & CEO, Akten
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
