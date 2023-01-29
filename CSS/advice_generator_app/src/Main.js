import Advice from './Advice';
import devider_mobile from './images/pattern-divider-mobile.svg';
import devider_desktop from './images/pattern-divider-desktop.svg';
import icon_dice from './images/icon-dice.svg';

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="advice-wrapper">
          <p className="title">
            advice #<span>117</span>
          </p>
          <Advice />
          <div className="divider">
            <img
              src={devider_mobile}
              className="divider-mobile"
              alt="divider"
            />
            <img
              src={devider_desktop}
              className="divider-desktop"
              alt="divider"
            />
          </div>
          <div className="dice">
            <img src={icon_dice} alt="dice" />
          </div>
        </section>
      </main>
    </>
  );
};
export default Main;
