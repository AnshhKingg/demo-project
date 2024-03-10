'use client'
import React from 'react';
import StoreProvider from '@/app/StoreProvider';

const withProvider = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <StoreProvider>
      <WrappedComponent {...props} />
    </StoreProvider>
  );
};

export default withProvider;