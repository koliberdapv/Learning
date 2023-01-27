import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [features, setFeatures] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSubmenu = (text, coordinates) => {
    const page = text;
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const displayFeatures = (e) => {
    console.log(isSubmenuOpen);
    const page = e.target.textContent;

    if (page === 'Features') {
      setFeatures(true);
    }
    if (page === 'Company') {
      setFeatures(false);
    }

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        location,
        displayFeatures,
        closeSubmenu,
        page,
        features,
        setFeatures,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
