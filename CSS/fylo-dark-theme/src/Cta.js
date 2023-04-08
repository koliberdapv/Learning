import stay_productive from './images/illustration-stay-productive.png';
import arrow from './images/icon-arrow.svg';
import arrow_hover from './images/icon-arrow-hover.svg';

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content | grid gap_25">
          <picture className="cta__content_img">
            <img src={stay_productive} alt="a group of people with ideas" />
          </picture>
          <div className="cta__content_info | grid gap_10">
            <h2 className="cta__content_info_header">
              Stay productive, wherever you are
            </h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="cta__content_info_link | flex gap_5" role="button">
              <a href="#">See how Fylo works</a>
              <picture className="arrow | flex">
                <img src={arrow} alt="arrow rigth" className="arrow-normal" />
                <img
                  src={arrow_hover}
                  alt="arrow rigth"
                  className="arrow-hover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta;
