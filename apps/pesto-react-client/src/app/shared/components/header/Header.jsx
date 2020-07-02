import { isNil } from 'lodash-es';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../slices/user/user.slice';
import AuthDialog from '../auth/AuthDialog';
import UserPlaceholder from './UserPlaceholder';

export const Header = () => {
  const [isAuthDialogOpened, setIsAuthDialogOpened] = useState(false);
  const onCloseAuthDialog = () => setIsAuthDialogOpened(false);
  const openAuthDialog = () => setIsAuthDialogOpened(true);

  const currentUser = useSelector(userSelectors.getCurrentUserSelector);
  const dispatch = useDispatch();

  const isLoggedIn = !isNil(currentUser);
  const logout = () => dispatch(userActions.logout());

  return (
    <div>
      <span>Logo</span>
      {isLoggedIn ? (
        <>
          <button onClick={logout}>Logout</button>
          <UserPlaceholder user={currentUser} />
        </>
      ) : (
        <button onClick={openAuthDialog}>Login/Register</button>
      )}
      <AuthDialog onClose={onCloseAuthDialog} open={isAuthDialogOpened} />
    </div>
  );
};

export default Header;
