import { createSelector, createSlice } from '@reduxjs/toolkit';

import { pluck } from '../../utils/functions';
import { login, loginByAuthToken, logout, register } from './user.thunks';

export const USER_FEATURE_KEY = 'user';

export const initialUserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const onAuthRequestPending = state => {
  return { ...state, error: false, loading: true };
};

const onAuthRequestFullfilled = (state, action) => {
  return {
    ...state,
    currentUser: action.payload,
    loading: false,
  };
};

const onAuthRequestRejected = (state, action) => {
  return {
    loading: false,
    error: action.error,
  };
};

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  extraReducers: builder => {
    /* init loading */
    builder.addCase(login.pending, onAuthRequestPending);
    builder.addCase(register.pending, onAuthRequestPending);
    builder.addCase(loginByAuthToken.pending, onAuthRequestPending);

    /* success auth */
    builder.addCase(login.fulfilled, onAuthRequestFullfilled);
    builder.addCase(register.fulfilled, onAuthRequestFullfilled);
    builder.addCase(loginByAuthToken.fulfilled, onAuthRequestFullfilled);

    /* failed auth */
    builder.addCase(login.rejected, onAuthRequestRejected);
    builder.addCase(register.rejected, onAuthRequestRejected);
    builder.addCase(loginByAuthToken.rejected, onAuthRequestRejected);

    /* logout */
    builder.addCase(logout.fulfilled, state => {
      return initialUserState;
    });
  },
});

export const userReducer = userSlice.reducer;

export const userActions = {
  ...userSlice.actions,
  login,
  register,
  logout,
};

export const getUserState = rootState => rootState[USER_FEATURE_KEY];
export const getCurrentUserSelector = createSelector(
  [getUserState],
  pluck('currentUser')
);

export const getUserStateLoadingSelector = createSelector(
  [getUserState],
  pluck('loading')
);

export const getUserStateErrorSelector = createSelector(
  [getUserState],
  pluck('error')
);

export const isLoggedInSelector = createSelector(
  [getCurrentUserSelector],
  Boolean
);

export const userSelectors = {
  getUserState,
  getCurrentUserSelector,
  getUserStateLoadingSelector,
  getUserStateErrorSelector,
  isLoggedInSelector,
};
