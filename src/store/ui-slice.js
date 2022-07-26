import { createSlice } from "@reduxjs/toolkit";

const initiaUiState = { isShown: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initiaUiState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
