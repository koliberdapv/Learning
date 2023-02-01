import person_img from './images/image-jeremy.png';

const Person = () => {
  return (
    <div className="person-wrapper">
      <div className="person-info">
        <div className="avatar-wrapper">
          <img src={person_img} alt="Jeremy Robson" />
        </div>
        <div className="name-info">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="schedule-cycle">
        <button type="button" className="btn">
          Daily
        </button>
        <button type="button" className="btn btn-active">
          Weekly
        </button>
        <button type="button" className="btn">
          Monthly
        </button>
      </div>
    </div>
  );
};
export default Person;
