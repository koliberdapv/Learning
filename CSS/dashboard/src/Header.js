import { useEffect } from 'react';

const Header = () => {
  const app = document.querySelector('.app');

  const enableDarkMode = () => {
    document.documentElement.style.colorScheme = 'dark';
    document.documentElement.classList.add('darkmode-enabled');
    document.documentElement.classList.remove('darkmode-disabled');
  };

  const disableDarkMode = () => {
    document.documentElement.style.colorScheme = 'light';
    document.documentElement.classList.remove('darkmode-enabled');
    document.documentElement.classList.add('darkmode-disabled');
  };

  const handleClick = () => {
    const button = document.querySelector('.darkmode-btn');
    if (button.classList.contains('enabled')) {
      disableDarkMode();
      button.classList.remove('enabled');
      return;
    }
    button.classList.add('enabled');
    enableDarkMode();
    return;
  };

  const checkUserSettings = () => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      const button = document.querySelector('.darkmode-btn');
      button.classList.add('enabled');
      enableDarkMode();
    }
  };

  useEffect(() => {
    checkUserSettings();
  }, []);

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
