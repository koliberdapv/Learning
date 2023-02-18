import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuTarget, setSubmenuTarget] = useState('');
  const [location, setLocation] = useState({});
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const checkWindowSize = () => {
    setWindowSize(window.innerWidth);

    if (isMenuOpen) {
      const btn = document.querySelector('.nav-btn');
      const firstChild = btn.firstChild;
      firstChild.style.display = 'block';
      const secondChild = firstChild.nextSibling;
      secondChild.style.display = 'none';
      setIsMenuOpen(false);
    }

    if (isSubmenuOpen) {
      setIsSubmenuOpen(false);
      const arrows = document.querySelectorAll('.arrow-down');
      arrows.forEach((arrow) => {
        arrow.classList.remove('arrow-upside-down');
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [windowSize]);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isSubmenuOpen,
        setIsSubmenuOpen,
        submenuTarget,
        setSubmenuTarget,
        location,
        setLocation,
        windowSize,
        setWindowSize,
        checkWindowSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
