'use client'
import { Provider } from "react-redux"
import { store, persistedStore } from "@/lib/redux/store"
import { PersistGate } from "redux-persist/integration/react";
import { StoreProviderProps } from "../interfaces";

const StoreProvider = ({children}: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading....</p>} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
};

export default StoreProvider;