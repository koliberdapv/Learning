import { useGlobalContext } from './Context';
import check from './images/icon-check.svg';

const Thanks = () => {
  const { isThanksOpen, closeThanks } = useGlobalContext();
  return (
    <>
      {isThanksOpen && (
        <section className="thanks-wrapper">
          <picture className="check-image-wrapper">
            <img src={check} alt="checkmark" />
          </picture>
          <h3>Thanks for your support!</h3>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our compain is
            completed.
          </p>
          <button
            type="button"
            className="btn thanks-btn"
            onClick={closeThanks}
          >
            Got it!
          </button>
        </section>
      )}
    </>
  );
};
export default Thanks;
