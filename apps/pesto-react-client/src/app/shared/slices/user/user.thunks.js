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
  async (credentials, _thunkAPI) => authAPI.loginByAuthToken(credentials)
);

export const register = createAsyncThunk(
  'user/register',
  async (credentials, _thunkAPI) => authAPI.register(credentials)
);

export const logout = createAsyncThunk('user/logout', async () => {
  removeAuthToken();
});
