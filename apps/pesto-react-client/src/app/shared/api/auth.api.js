import { apiPost } from './api';

export const authAPI = {
  login: credentials => apiPost('/login', credentials),
  register: credentials => apiPost('/register', credentials),
  loginByAuthToken: credentials => apiPost('/loginByAuthToken', credentials),
};
