import { createAsyncThunk } from '@reduxjs/toolkit';

import { authAPI } from '../../api/auth.api';
import { removeAuthToken, setAuthToken } from '../../utils/auth-token-storage';

const handleAuthPayload = ({ currentUser, token, expires }) => {
  setAuthToken(token, expires);
  return currentUser;
};

export const login = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    const payload = await authAPI.login(credentials);
    console.log(payload);
    return handleAuthPayload(payload);
  }
);

export const loginByAuthToken = createAsyncThunk(
  'user/loginByAuthToken',
  async (credentials, thunkAPI) => authAPI.loginByAuthToken(credentials)
);

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => authAPI.register(credentials)
);

export const logout = createAsyncThunk('user/logout', async () => {
  removeAuthToken();

  return Promise.resolve();
});
