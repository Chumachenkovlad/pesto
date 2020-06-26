import { isNil } from 'lodash-es';

import { environment } from '../../../environments/environment';
import { compose } from '../../shared/utils/functions';
import { getAuthToken } from '../utils/auth-token-storage';

const { baseUrl } = environment;
const AUTH_HEADER_KEY = 'Authorization';

export const addContentTypeHeader = options => {
  const contentTypeHeaders = { 'Content-Type': 'application/json' };

  if (options.headers) {
    return {
      ...options,
      headers: {
        ...options.headers,
        ...contentTypeHeaders,
      },
    };
  }

  return {
    ...options,
    headers: contentTypeHeaders,
  };
};
export const addAuthorizationHeader = options => {
  const token = getAuthToken();

  if (isNil(token)) {
    return options;
  }

  const authHeaders = { [AUTH_HEADER_KEY]: token };

  if (options.headers) {
    return {
      ...options,
      headers: {
        ...options.headers,
        ...authHeaders,
      },
    };
  }

  return {
    ...options,
    headers: authHeaders,
  };
};

export const _fetch = async options => {
  const opts = compose(addAuthorizationHeader, addContentTypeHeader)(options);
  try {
    const res = await fetch(opts.url, opts);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export function apiGet(path, query) {
  const params = new URLSearchParams(query);

  return _fetch({
    url: `${baseUrl}${path}?${params.toString()}`,
    method: 'GET',
  });
}
export function apiPost(path, body) {
  return _fetch({
    url: `${baseUrl}${path}`,
    method: 'POST',
    body: JSON.stringify(body),
  });
}
export function apiUpdate(path, body) {
  return _fetch({
    url: `${baseUrl}${path}`,
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}
export function apiDelete(path) {
  return _fetch({
    url: `${baseUrl}${path}`,
    method: 'DELETE',
  });
}
