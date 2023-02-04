import person_img from './images/image-jeremy.png';

// const handleClick = (e) => {
//   const target = e.target.textContent;
//   console.log(target);
//   setCycle(target);
// };

const Person = ({ cycle, setCycle }) => {
  const handleClick = (e) => {
    const target = e.target.textContent;
    setCycle(target);
  };
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
        <button
          type="button"
          className={`btn ${cycle === 'daily' && 'btn-active'}`}
          onClick={handleClick}
        >
          daily
        </button>
        <button
          type="button"
          className={`btn ${cycle === 'weekly' && 'btn-active'}`}
          onClick={handleClick}
        >
          weekly
        </button>
        <button
          type="button"
          className={`btn ${cycle === 'monthly' && 'btn-active'}`}
          onClick={handleClick}
        >
          monthly
        </button>
      </div>
    </div>
  );
};
export default Person;
