import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getTtnInfo } from "./operations";

const TtnInitialState = {
  number: "",
};

const TtnSlice = createSlice({
  name: "Ttn",
  initialState: TtnInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(getTtnInfo.fulfilled, (state, action) => {
        state.number = action.payload.ttnRespons.number;
      })
});

const TtnPersistConfig = {
  key: "Ttn",
  storage,
};

export const ttnReduser = persistReducer(TtnPersistConfig, TtnSlice.reducer);
