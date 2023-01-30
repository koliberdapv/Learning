import { useState, useEffect } from 'react';
import Advice from './Advice';
import Loading from './Loading';
import devider_mobile from './images/pattern-divider-mobile.svg';
import devider_desktop from './images/pattern-divider-desktop.svg';
import icon_dice from './images/icon-dice.svg';

const url = 'https://api.adviceslip.com/advice';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const responce = await fetch(url);
      const advice = await responce.json();
      setAdvice(advice);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAdvice();
  };

  return (
    <>
      <main className="main">
        <section className="advice-wrapper">
          {loading && <Loading />}
          {advice && !loading && <Advice advice={advice} />}
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
          <div className="dice" onClick={handleClick}>
            <img src={icon_dice} alt="dice" />
          </div>
        </section>
      </main>
    </>
  );
};
export default Main;
