import { AppBar, Box, Button, IconButton, makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isNil } from 'lodash-es';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../slices/user/user.slice';
import AuthDialog from '../auth/AuthDialog';
import UserPlaceholder from './UserPlaceholder';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    padding: `${theme.spacing(2)}px !important`,
  },
  spacer: {
    flex: '1 1 auto',
  },
}));

export const Header = () => {
  const [isAuthDialogOpened, setIsAuthDialogOpened] = useState(false);
  const onCloseAuthDialog = () => setIsAuthDialogOpened(false);
  const openAuthDialog = () => setIsAuthDialogOpened(true);

  const currentUser = useSelector(userSelectors.getCurrentUserSelector);
  const dispatch = useDispatch();

  const isLoggedIn = !isNil(currentUser);
  const logout = () => dispatch(userActions.logout());

  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="secondary">
      <Box letterSpacing={10} fontSize="h4.fontSize">
        Pesto
      </Box>

      <span className={classes.spacer}></span>
      {isLoggedIn ? (
        <>
          <UserPlaceholder user={currentUser} />

          <Box ml={2}>
            <IconButton onClick={logout}>
              <ExitToAppIcon style={{ color: 'white' }} />
            </IconButton>
          </Box>
        </>
      ) : (
        <Button variant="contained" onClick={openAuthDialog}>
          Login/Register
        </Button>
      )}
      <AuthDialog onClose={onCloseAuthDialog} open={isAuthDialogOpened} />
    </AppBar>
  );
};

export default Header;
