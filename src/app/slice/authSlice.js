import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    email: '',
    role_id: '',
    account_type: '',
    created_at: '',
    updated_at: '',
    roles: []
  },
  token: '',
  isLoggedIn: false,
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
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
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
