import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuTarget, setSubmenuTarget] = useState('');
  const [location, setLocation] = useState({});
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
