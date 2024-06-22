import { createSlice } from '@reduxjs/toolkit';

const userToken = localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return {
        user: null,
        isAuthenticated: false,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      user: null,
      isAuthenticated: false,
    };
  }
};

// Function to save the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = loadState(
  {
    user: null,
    token: userToken,
    isAuthenticated: false,
    forgotEmail: '',
    forgotEmailToken: '',
    status: null,
  }
);

// const initialState = {
//   user: null,
//   token: userToken,
//   isAuthenticated: false,
//   forgotEmail: '',
//   forgotEmailToken: '',
//   status: null,
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('auth', action.payload.token);
      saveState(state);
    },
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('auth', payload.token);
    },
    logoutUser: (state) => {
      localStorage.removeItem('auth');
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      saveState(state);
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setForgotEmail: (state, action) => {
      state.forgotEmail = action.payload;
    },
    setForgotEmailToken: (state, action) => {
      state.forgotEmailToken = action.payload;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  setCredentials,
  updateUser,
  setForgotEmail,
  setForgotEmailToken,
} = authSlice.actions;

export default authSlice.reducer;
