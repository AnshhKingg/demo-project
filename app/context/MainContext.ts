'use client'
import React from "react";

const MainContext = React.createContext({
  handleClickOpen: () => {},
  handleClose: () => {},
  open: false,
});

export default MainContext;