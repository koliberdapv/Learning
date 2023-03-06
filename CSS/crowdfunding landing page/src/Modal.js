import close_icon from './images/icon-close-modal.svg';
import { useGlobalContext } from './Context';

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();

  const handleClickRadio = (e) => {
    const targetInput = e.target;
    const cards = document.querySelectorAll('.modal-card');
    cards.forEach((card) => {
      card.classList.remove('modal-checked');
    });
    targetInput.parentElement.parentElement.classList.add('modal-checked');
  };

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

          <form className="cards-wrapper">
            <article className="card modal-card">
              <div className="grid-divider">
                <input
                  type="radio"
                  name="tier"
                  className="radio"
                  onClick={handleClickRadio}
                />
                <div className="card-title">
                  <p className="title-name">Pledge with no reward</p>
                </div>
                <p>
                  Choose to support us without a reward if you simply belive in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
              <div className="modal-cta">
                <p id="hidden">Enter your pledge</p>
                <div className="modal-input-wrapper">
                  <input
                    type="number"
                    name="pledge"
                    className="input-pledge"
                    id="hidden"
                  />
                  <button type="button" className="btn continue-btn">
                    Continue
                  </button>
                </div>
              </div>
            </article>

            <article className="card modal-card">
              <div className="grid-divider">
                <input
                  type="radio"
                  name="tier"
                  className="radio"
                  onClick={handleClickRadio}
                />
                <div className="card-title">
                  <p className="title-name">Bamboo Stand</p>
                  <p className="pledge">Pledge $25 or more</p>
                  <div className="statistics modal-desktop">
                    <p>101</p>
                    <p>left</p>
                  </div>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you'll be added
                  to a special Backer member list.
                </p>
                <div className="statistics modal-phone">
                  <p>101</p>
                  <p>left</p>
                </div>
              </div>
              <div className="modal-cta">
                <p>Enter your pledge</p>
                <div className="modal-input-wrapper">
                  <input type="number" name="pledge" className="input-pledge" />
                  <button type="button" className="btn continue-btn">
                    Continue
                  </button>
                </div>
              </div>
            </article>

            <article className="card modal-card">
              <div className="grid-divider">
                <input
                  type="radio"
                  name="tier"
                  className="radio"
                  onClick={handleClickRadio}
                />
                <div className="card-title">
                  <p className="title-name">Black Edition Stand</p>
                  <p className="pledge">Pledge $75 or more</p>
                  <div className="statistics modal-desktop">
                    <p>64</p>
                    <p>left</p>
                  </div>
                </div>
                <p id="control-max-width">
                  You get a Black Special Edition computer stand and a personal
                  thank you. You'll be added to our Backer member list. Shipping
                  is included.
                </p>
                <div className="statistics modal-phone">
                  <p>64</p>
                  <p>left</p>
                </div>
              </div>
              <div className="modal-cta">
                <p>Enter your pledge</p>
                <div className="modal-input-wrapper">
                  <input type="number" name="pledge" className="input-pledge" />
                  <button type="button" className="btn continue-btn">
                    Continue
                  </button>
                </div>
              </div>
            </article>

            <article className="card out-of-stock modal-card">
              <div className="grid-divider">
                <input type="radio" name="tier" className="radio" disabled />
                <label className="card-title">
                  <p className="title-name">Mahogany Special Edition</p>
                  <p className="pledge">Pledge $200 or more</p>
                  <div className="statistics modal-desktop">
                    <p>0</p>
                    <p>left</p>
                  </div>
                </label>
                <p>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You'll be added to our Backer member
                  list. Shipping is included.
                </p>
                <div className="statistics modal-phone">
                  <p>0</p>
                  <p>left</p>
                </div>
              </div>
            </article>
          </form>
        </section>
      )}
    </>
  );
};
export default Modal;
