import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshPageThunk,
} from './userOperations';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      //=================REGISTER=================
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //=================LOGIN=================
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //=================LOGOUT=================
      .addCase(logoutThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //=================REFRESH=================
      .addCase(refreshPageThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshPageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(refreshPageThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
