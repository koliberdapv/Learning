import { queryByAttribute } from '@testing-library/react';
import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isDarkenerOpen, setIsDarkenerOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsDarkenerOpen(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDarkenerOpen(false);
  };

  const changeAside = (action) => {
    const openBtn = document.querySelector('.aside-open-btn');
    const closeBtn = document.querySelector('.aside-close-btn');

    if (action === 'open') {
      setIsAsideOpen(true);
      setIsDarkenerOpen(true);
      openBtn.classList.add('do-not-display');
      closeBtn.classList.add('display');
    }

    if (action === 'close') {
      setIsAsideOpen(false);
      setIsDarkenerOpen(false);
      openBtn.classList.remove('do-not-display');
      closeBtn.classList.remove('display');
    }
  };

  const handleClickNavBtn = () => {
    if (!isAsideOpen) {
      changeAside('open');
    }
    if (isAsideOpen) {
      changeAside('close');
    }
  };

  // const checkWindowSize = () => {
  //   changeAside('close');
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', checkWindowSize);
  //   return () => {
  //     window.removeEventListener('resize', checkWindowSize);
  //   };
  // }, [windowSize]);

  return (
    <AppContext.Provider
      value={{
        isAsideOpen,
        setIsAsideOpen,
        isDarkenerOpen,
        setIsDarkenerOpen,
        handleClickNavBtn,
        isBookmarkChecked,
        setIsBookmarkChecked,
        isModalOpen,
        setIsModalOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
