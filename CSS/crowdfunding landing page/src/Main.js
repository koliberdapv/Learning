import mastercraft from './images/logo-mastercraft.svg';
import About from './About';
import Bookmark from './Bookmark';
import { useGlobalContext } from './Context';

const Main = () => {
  const { openModal } = useGlobalContext();
  return (
    <main className="main-wrapper">
      <section className="cta">
        <picture className="mastercraft-logo-wrapper">
          <img src={mastercraft} alt="mastercraft logo" />
        </picture>
        <h1 className="main-title">mastercraft bamboo monitor riser</h1>
        <p>
          A beautiful handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="cta-btn-wrapper">
          <button type="button" className="btn" onClick={openModal}>
            Back this project
          </button>
          <Bookmark />
        </div>
      </section>

      <section className="main-info">
        <div className="main-numbers">
          <div className="statistics">
            <p>$89,914</p>
            <p>of $100,000 backed</p>
          </div>
          <div className="divider"></div>
          <div className="statistics">
            <p>5,007</p>
            <p>total backers</p>
          </div>
          <div className="divider"></div>
          <div className="statistics">
            <p>56</p>
            <p>days left</p>
          </div>
        </div>
        <div className="bar">
          <div className="bar-inner-line"></div>
        </div>
      </section>

      <About />
    </main>
  );
};
export default Main;
