import userData from './data.json';
import dots from './images/icon-ellipsis.svg';

const Activities = ({ cycle }) => {
  return (
    <div className="activities-wrapper">
      {userData.map((item, index) => {
        const { title, timeframes } = item;
        if (cycle === 'daily') {
          const { current, previous } = timeframes.daily;
          return (
            <div className="card" key={index}>
              <div className={`${title} image-wrapper`}></div>
              <div className="specs">
                <div className="title-wrapper">
                  <h3>{title}</h3>
                  <button className="dots">
                    <img src={dots} alt="three dots" />
                  </button>
                </div>
                <div className="info-wrapper">
                  <h2>{current}hrs</h2>
                  <p>Yesterday - {previous}hrs</p>
                </div>
              </div>
            </div>
          );
        }
        if (cycle === 'weekly') {
          const { current, previous } = timeframes.weekly;
          return (
            <div className="card" key={index}>
              <div className={`${title} image-wrapper`}></div>
              <div className="specs">
                <div className="title-wrapper">
                  <h3>{title}</h3>
                  <button className="dots">
                    <img src={dots} alt="three dots" />
                  </button>
                </div>
                <div className="info-wrapper">
                  <h2>{current}hrs</h2>
                  <p>Last Week - {previous}hrs</p>
                </div>
              </div>
            </div>
          );
        }
        if (cycle === 'monthly') {
          const { current, previous } = timeframes.monthly;
          return (
            <div className="card" key={index}>
              <div className={`${title} image-wrapper`}></div>
              <div className="specs">
                <div className="title-wrapper">
                  <h3>{title}</h3>
                  <button className="dots">
                    <img src={dots} alt="three dots" />
                  </button>
                </div>
                <div className="info-wrapper">
                  <h2>{current}hrs</h2>
                  <p>Last Month - {previous}hrs</p>
                </div>
              </div>
            </div>
          );
        }

        return;
      })}
    </div>
  );
};
export default Activities;
