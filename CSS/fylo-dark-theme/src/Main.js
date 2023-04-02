import access from './images/icon-access-anywhere.svg';
import security from './images/icon-security.svg';
import collaboration from './images/icon-collaboration.svg';
import any_file from './images/icon-any-file.svg';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content | grid">
          <article className="main__content_info | grid gap_20">
            <picture className="main__content_info_img">
              <img src={access} alt="a computer with a phone aside" />
            </picture>
            <div className="main__content_info_text | grid gap_15">
              <h2 className="main__content_info_text_header">
                Access your files anywhere
              </h2>
              <p>
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </article>

          <article className="main__content_info | grid gap_20">
            <picture className="main__content_info_img">
              <img src={security} alt="a shield with a checkmark" />
            </picture>
            <div className="main__content_info_text | grid gap_15">
              <h2 className="main__content_info_text_header">
                Security you can trust
              </h2>
              <p>
                2-factor authentification and user-controlled encryption are
                just a couple of the security features we allow to help secure
                your files.
              </p>
            </div>
          </article>

          <article className="main__content_info | grid gap_20">
            <picture className="main__content_info_img">
              <img src={collaboration} alt="a clock with a people next to it" />
            </picture>
            <div className="main__content_info_text | grid gap_15">
              <h2 className="main__content_info_text_header">
                Real-time collaboration
              </h2>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </article>

          <article className="main__content_info | grid gap_20">
            <picture className="main__content_info_img">
              <img
                src={any_file}
                alt="a memory card with the files next to it"
              />
            </picture>
            <div className="main__content_info_text | grid gap_15">
              <h2 className="main__content_info_text_header">
                Store any type of file
              </h2>
              <p>
                Whether you're sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};
export default Main;
