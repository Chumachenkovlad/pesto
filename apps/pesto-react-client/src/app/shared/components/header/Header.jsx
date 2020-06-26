import { isNil } from 'lodash-es';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../slices/user/user.slice';
import UserPlaceholder from './UserPlaceholder';

export const Header = () => {
  const currentUser = useSelector(userSelectors.getCurrentUserSelector);
  const dispatch = useDispatch();

  const isLoggedIn = !isNil(currentUser);

  const login = () => {
    dispatch(
      userActions.login({
        email: 'chumachenko.vla@gmail.com',
        password: '12345678',
      })
    );
    console.log('test');
  };
  const register = () => dispatch(userActions.register({}));
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
        <>
          <button onClick={login}>Login</button>
          <button onClick={register}>Register</button>
        </>
      )}
    </div>
  );
};

export default Header;
