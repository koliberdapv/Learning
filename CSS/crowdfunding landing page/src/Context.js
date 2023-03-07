import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isDarkenerOpen, setIsDarkenerOpen] = useState(false);
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const handleClickDarkener = () => {
    setIsModalOpen(false);
    setIsThanksOpen(false);
    if (isAsideOpen) {
      changeAside('close');
    }
    setIsDarkenerOpen(false);
  };

  const openThanks = () => {
    setIsModalOpen(false);
    setIsDarkenerOpen(true);
    setIsThanksOpen(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const submitPledge = (e) => {
    const pledge = e.target.previousSibling;
    const toBePledged = e.target.parentElement.classList[1];
    const pledgeValue = parseInt(pledge.value);

    if (toBePledged === undefined) {
      openThanks();
      return;
    }

    if (!pledgeValue || pledgeValue === NaN || pledgeValue === null) {
      pledge.focus();
      return;
    }

    if (toBePledged === '25') {
      if (pledgeValue < 25) {
        pledge.focus();
        return;
      }
      openThanks();
    }
    if (toBePledged === '75') {
      if (pledgeValue < 75) {
        pledge.focus();
        return;
      }
      openThanks();
    }
  };

  const closeThanks = () => {
    setIsThanksOpen(false);
    setIsDarkenerOpen(false);
  };

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
        openThanks,
        isThanksOpen,
        setIsThanksOpen,
        closeThanks,
        submitPledge,
        handleClickDarkener,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
