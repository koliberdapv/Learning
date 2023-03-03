const About = () => {
  return (
    <section className="about-wrapper">
      <article className="about-info">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
      </article>

      <section className="cards-wrapper">
        <article className="card">
          <div className="card-title">
            <p>Bamboo Stand</p>
            <p>Pledge $25 or more</p>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list.
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
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
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
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer member list.
            Shipping is included.
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
  );
};
export default About;
