import { createAsyncThunk } from '@reduxjs/toolkit';

import { authAPI } from '../../api/auth.api';
import { removeAuthToken, setAuthToken } from '../../utils/auth-token-storage';

const handleAuthPayload = ({ currentUser, token, expires }) => {
  setAuthToken(token, expires);
  return currentUser;
};

export const login = createAsyncThunk(
  'user/login',
  async (credentials, _thunkAPI) => {
    const payload = await authAPI.login(credentials);
    return handleAuthPayload(payload);
  }
);

export const loginByAuthToken = createAsyncThunk(
  'user/loginByAuthToken',
  async (data, _thunkAPI) => {
    const payload = await authAPI.loginByAuthToken();
    return handleAuthPayload(payload);
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (credentials, _thunkAPI) => {
    const payload = authAPI.register(credentials);
    return handleAuthPayload(payload);
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  removeAuthToken();
});
