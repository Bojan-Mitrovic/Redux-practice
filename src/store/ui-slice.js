import { createSlice } from "@reduxjs/toolkit";

const initiaUiState = { isShown: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initiaUiState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
