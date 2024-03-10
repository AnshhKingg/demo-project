import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { carDetailsSlice } from "../slices/CarDetailsSlice";
import { attributesSlice } from "../slices/AttributesSlice";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['CarDetailsReducer', 'AttributeReducer'],
};

export const RootReducer = () => combineReducers({
  [carDetailsSlice.name]: carDetailsSlice.reducer,
  [attributesSlice.name]: attributesSlice.reducer,
});

export const persistedCarDetails = persistReducer(persistConfig, RootReducer);

