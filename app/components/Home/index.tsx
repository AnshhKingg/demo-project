"use client"
import MainContextProvider from '@/app/context/provider/MainContextProvider';
import React from 'react';
import MainBlock from '../MainBlock';
import { useMain } from '@/app/hooks/main';
import withProvider from '@/app/hoc/withProvider';

const HomeComponent = () => {
  const {handleClickOpen, handleClose, open} = useMain(); 
  return (
    <>
      <MainContextProvider handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}>
        <MainBlock />
      </MainContextProvider>
    </>
  );
}
export default withProvider(HomeComponent);
