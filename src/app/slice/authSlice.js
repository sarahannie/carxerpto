import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: '',
  isAuthenticated: false,
  forgotEmail: '',
  forgotEmailToken: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setForgotEmail: (state, action) => {
      state.forgotEmail = action.payload;
    },
    setForgotEmailToken: (state, action) => {
      state.forgotEmailToken = action.payload;
    }
  }
});

export const {
  loginUser,
  logoutUser,
  updateUser,
  setForgotEmail,
  setForgotEmailToken
} = authSlice.actions;

export default authSlice.reducer;
