import { useGlobalContext } from './Context';

const Cards = () => {
  const { openModal } = useGlobalContext();
  return (
    <section className="cards-wrapper">
      <article className="card">
        <div className="card-title">
          <p className="title-name">Bamboo Stand</p>
          <p className="pledge">Pledge $25 or more</p>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div className="card-cta">
          <div className="statistics">
            <p>101</p>
            <p>left</p>
          </div>
          <button
            type="button"
            className="btn select-reward-btn"
            onClick={openModal}
          >
            Select Reward
          </button>
        </div>
      </article>

      <article className="card">
        <div className="card-title">
          <p className="title-name">Black Edition Stand</p>
          <p className="pledge">Pledge $75 or more</p>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div className="card-cta">
          <div className="statistics">
            <p>64</p>
            <p>left</p>
          </div>
          <button
            type="button"
            className="btn select-reward-btn"
            onClick={openModal}
          >
            Select Reward
          </button>
        </div>
      </article>

      <article className="card out-of-stock">
        <div className="card-title">
          <p className="title-name"> Mahogany Special Edition</p>
          <p className="pledge">Pledge $200 or more</p>
        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="card-cta">
          <div className="statistics">
            <p>0</p>
            <p>left</p>
          </div>
          <button type="button" className="btn select-reward-btn">
            Out of Stock
          </button>
        </div>
      </article>
    </section>
  );
};
export default Cards;
