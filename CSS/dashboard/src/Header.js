const Header = () => {
  const app = document.querySelector('.app');

  const enableDarkMode = () => {
    document.documentElement.style.colorScheme = 'dark';
  };

  const disableDarkMode = () => {
    document.documentElement.style.colorScheme = 'light';
  };

  const handleClick = (e) => {
    enableDarkMode();
    const target = e.target;
    if (target.dataset.type === 'inner-circle') {
      if (target.parentElement.classList.contains('darkmode-enabled')) {
        target.parentElement.classList.remove('darkmode-enabled');
        disableDarkMode();
        return;
      }
      target.parentElement.classList.add('darkmode-enabled');
      return;
    }

    if (target.classList.contains('darkmode-enabled')) {
      disableDarkMode();
      target.classList.remove('darkmode-enabled');
      return;
    }
    target.classList.add('darkmode-enabled');
    enableDarkMode();
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__content | grid">
          <div className="header__title | grid">
            <h1>social media dashboard</h1>
            <p className="info_text">
              total follower: <span>23,004</span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="header__buttons  | flex side_to_side centered">
            <p className="info_text">dark mode</p>
            <button
              className="darkmode-btn | flex centered"
              role="darkmode"
              data-type="darkmode-btn"
              onClick={handleClick}
            >
              <div
                className="darkmode-btn_inner-circle"
                data-type="inner-circle"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
