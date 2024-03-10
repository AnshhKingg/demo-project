import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  locations: [],
  bodyTypes: [],
  brands: [],
  owners: [],
  budgets: [],
  fuelTypes: [],
  transmissions: [],
}

export const attributesSlice = createSlice({
  name: 'AttributeReducer',
  initialState,
  reducers:{
    addLocation: (state, action) => {
      let payload = action.payload as never;
      !state.locations.includes(payload) && state.locations.push(payload);
    },
    addBrand: (state, action) => {
      let payload = action.payload as never;
      !state.brands.includes(payload) && state.brands.push(payload as never);
    },
    addBodyType: (state, action) => {
      let payload = action.payload as never;
      !state.bodyTypes.includes(payload)&& state.bodyTypes.push(payload as never);
    },
    addOwners: (state, action) => {
      let payload = action.payload as never;
      !state.owners.includes(payload)&& state.owners.push(payload as never);
    },
    addBudget: (state, action) => {
      let payload = action.payload as never;
      !state.budgets.includes(payload)&& state.budgets.push(payload as never);
    },
    addFuelType: (state, action) => {
      let payload = action.payload as never;
      !state.fuelTypes.includes(payload)&& state.fuelTypes.push(payload as never);
    },
    addTransmission: (state, action) => {
      let payload = action.payload as never;
      !state.transmissions.includes(payload)&& state.transmissions.push(payload as never);
    },
  }
})

export const {
  addLocation,
  addBrand,
  addBodyType,
  addOwners,
  addBudget,
  addFuelType,
  addTransmission,
} = attributesSlice.actions;