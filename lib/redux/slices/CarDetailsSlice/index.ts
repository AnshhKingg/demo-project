import { createSlice } from "@reduxjs/toolkit"
import { CarDetailsSliceInitProp } from "@/app/interfaces";

const initialState: CarDetailsSliceInitProp | [] = [];

export const carDetailsSlice = createSlice({
  name: 'CarDetailsReducer',
  initialState,
  reducers:{
    addCarDetails: (state , action) => {
      state.push(action.payload as never);
    },
    updateCarDetails: (state, action) => {
      const index = state.findIndex((obj: any) => obj.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload as never;
      } else {
        state.push(action.payload as never);
      }
    },
    deleteCarDetails: (state, action) => {
      const { id } = action.payload;
      state = state.filter((obj: any) => obj.id !== id) as never
    }
  }
});

export const {
  addCarDetails, 
  updateCarDetails, 
  deleteCarDetails
} = carDetailsSlice.actions;