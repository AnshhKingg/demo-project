"use strict"
import React from 'react';
import MainContext from '../MainContext';

const MainContextProvider = ({children, handleClickOpen, handleClose, open}: any) => {
  const contextValue = {
    handleClickOpen: handleClickOpen,
    handleClose: handleClose,
    open: open,
  };
  return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
}
export default MainContextProvider;