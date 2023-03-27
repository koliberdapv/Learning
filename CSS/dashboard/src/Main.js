import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import arrowUp from './images/icon-up.svg';
import arrowDown from './images/icon-down.svg';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <h2 className="main__title">overview - today</h2>
        <section className="main__content | grid gap_15">
          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>page views</p>
              <picture>
                <img src={facebook} alt="facebook" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">87</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="increase"
              >
                <picture className="grid">
                  <img src={arrowUp} alt="arrow up" />
                </picture>
                <p>
                  <span>3</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>likes</p>
              <picture>
                <img src={facebook} alt="facebook" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">52</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="decrease"
              >
                <picture className="grid">
                  <img src={arrowDown} alt="arrow up" />
                </picture>
                <p>
                  <span>2</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>likes</p>
              <picture>
                <img src={instagram} alt="instagram" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">5462</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="increase"
              >
                <picture className="grid">
                  <img src={arrowUp} alt="arrow up" />
                </picture>
                <p>
                  <span>2257</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>profile views</p>
              <picture>
                <img src={instagram} alt="instagram" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">52k</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="increase"
              >
                <picture className="grid">
                  <img src={arrowUp} alt="arrow up" />
                </picture>
                <p>
                  <span>1375</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>retweets</p>
              <picture>
                <img src={twitter} alt="twitter" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">117</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="increase"
              >
                <picture className="grid">
                  <img src={arrowUp} alt="arrow up" />
                </picture>
                <p>
                  <span>303</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>likes</p>
              <picture>
                <img src={twitter} alt="twitter" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">507</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="increase"
              >
                <picture className="grid">
                  <img src={arrowUp} alt="arrow up" />
                </picture>
                <p>
                  <span>553</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>likes</p>
              <picture>
                <img src={youtube} alt="youtube" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">107</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="decrease"
              >
                <picture className="grid">
                  <img src={arrowDown} alt="arrow up" />
                </picture>
                <p>
                  <span>19</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="main__content_card | grid gap_15">
            <div className="main__content_card_title | flex side_to_side centered">
              <p>total views</p>
              <picture>
                <img src={youtube} alt="youtube" />
              </picture>
            </div>
            <div className="main__content_card_info | flex side_to_side centered">
              <p className="card_info_numbers">1407</p>
              <div
                className="main__content_card_info_trend | flex gap_5"
                dataset-dynamic="decrease"
              >
                <picture className="grid">
                  <img src={arrowDown} alt="arrow up" />
                </picture>
                <p>
                  <span>12</span>%
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Main;
