"use client"
import React from "react";

export const useMain = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return {handleClickOpen, handleClose, open};
};