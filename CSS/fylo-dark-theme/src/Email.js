const Email = () => {
  return (
    <section className="email">
      <div className="container">
        <form className="email__form | grid gap_15">
          <h2 className="email__form_title">Get early access today</h2>
          <p className="email__form_text">
            It only makes a minute to sign up and our free starter tier is
            extremely ganerous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="email__form_inputs | grid">
            <div className="input">
              <input
                type="text"
                className="email_input"
                placeholder="email@example.com"
              />
              <p className="email_input_error">
                Please enter a valid email address
              </p>
            </div>
            <button type="submit" className="submit_btn btn">
              get started for free
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Email;
