import close_icon from './images/icon-close-modal.svg';
import { useGlobalContext } from './Context';

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    <>
      {isModalOpen && (
        <section className="modal-wrapper">
          <article className="modal-info">
            <h2>Back this project</h2>
            <button
              type="button"
              className="close-modal-btn"
              onClick={closeModal}
            >
              <img src={close_icon} alt="close" />
            </button>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </article>

          <section className="cards-wrapper">
            {isModalOpen && (
              <article className="card modal-card">
                <div className="card-title">
                  <p>Pledge with no reward</p>
                </div>
                <p>
                  Choose to support us without a reward if you simply belive in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </article>
            )}

            <article className="card">
              <div className="card-title">
                <p>Bamboo Stand</p>
                <p>Pledge $25 or more</p>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </p>
              <div className="card-cta">
                <div className="statistics">
                  <p>101</p>
                  <p>left</p>
                </div>
                <button type="button" className="btn select-reward-btn">
                  Select Reward
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-title">
                <p>Black Edition Stand</p>
                <p>Pledge $75 or more</p>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </p>
              <div className="card-cta">
                <div className="statistics">
                  <p>64</p>
                  <p>left</p>
                </div>
                <button type="button" className="btn select-reward-btn">
                  Select Reward
                </button>
              </div>
            </article>

            <article className="card out-of-stock">
              <div className="card-title">
                <p>Mahogany Special Edition</p>
                <p>Pledge $200 or more</p>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
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
        </section>
      )}
    </>
  );
};
export default Modal;
