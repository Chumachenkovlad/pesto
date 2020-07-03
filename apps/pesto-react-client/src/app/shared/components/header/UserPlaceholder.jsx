import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { UserPropTypes } from '../../prop-types/user.prop-types';
import { getUserName } from '../../utils/get-user-name';

const USER_AVATAR_PLACEHOLDER_PATH =
  '/assets/images/user-avatar-placeholder.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  mr: {
    marginRight: theme.spacing(1),
  },
}));

const UserPlaceholder = ({ user }) => {
  const avatarUrl = user.avatarUrl || USER_AVATAR_PLACEHOLDER_PATH;
  const userName = getUserName(user);
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.root}>
      <Box mr={1}>
        <Avatar alt={userName} src={avatarUrl} />
      </Box>
      <Typography variant="caption">{userName}</Typography>
    </Button>
  );
};

UserPlaceholder.propTypes = {
  user: UserPropTypes,
};

export default UserPlaceholder;
