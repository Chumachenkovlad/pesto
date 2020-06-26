import { isNil } from 'lodash-es';

export function getUserName(user) {
  if (isNil(user)) {
    throw new Error('user should be defined');
  }

  const { firstName, lastName } = user;

  return `${firstName || ''} ${lastName || ''}`.trim() || 'Noname';
}
