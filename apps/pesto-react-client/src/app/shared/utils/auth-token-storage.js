import Cookie from 'js-cookie';
import { isString } from 'lodash-es';

const tokenKey = 'pesto-auth-token';

export function setAuthToken(token, expires) {
  if (!isString(token)) {
    throw new Error('token should be typeof string');
  }

  Cookie.set(tokenKey, token, { expires: new Date(expires) });
}

export function getAuthToken() {
  return Cookie.get(tokenKey);
}

export function removeAuthToken() {
  return Cookie.remove(tokenKey);
}
