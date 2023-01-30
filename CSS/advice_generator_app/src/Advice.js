const Advice = ({ advice }) => {
  const { id, advice: quote } = advice.slip;
  return (
    <>
      <p className="title">
        advice #<span>{id}</span>
      </p>
      <h1 className="advice">"{quote}"</h1>
    </>
  );
};
export default Advice;
