import React from 'react';

import { UserPropTypes } from '../../prop-types/user.prop-types';
import { getUserName } from '../../utils/get-user-name';

const USER_AVATAR_PLACEHOLDER_PATH =
  '/assets/images/user-avatar-placeholder.png';

const UserPlaceholder = ({ user }) => {
  const avatarUrl = user.avatarUrl || USER_AVATAR_PLACEHOLDER_PATH;
  return (
    <div>
      <img src={avatarUrl} alt="avatar" />
      <div>{getUserName(user)}</div>
    </div>
  );
};

UserPlaceholder.propTypes = {
  user: UserPropTypes,
};

export default UserPlaceholder;
