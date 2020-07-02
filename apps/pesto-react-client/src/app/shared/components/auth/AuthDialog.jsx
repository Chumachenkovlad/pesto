import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../slices/user/user.slice';
import TabPanel from '../tabs/TabsPanel';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles({
  root: {
    width: '400px',
  },
  tab: {
    width: '50%',
  },
});

export default function AuthDialog(props) {
  const classes = useStyles();

  const { onClose, open } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const dispatch = useDispatch();
  const serverErrors = useSelector(userSelectors.getUserStateErrorSelector);
  const loading = useSelector(userSelectors.getUserStateLoadingSelector);

  const login = credentials => dispatch(userActions.login(credentials));
  const register = credentials => dispatch(userActions.register(credentials));
  const handleChange = (event, newValue) => setSelectedTabIndex(newValue);

  return (
    <Dialog onClose={onClose} open={open}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs onChange={handleChange} value={selectedTabIndex}>
            <Tab label="Login" className={classes.tab} />
            <Tab label="Register" className={classes.tab} />
          </Tabs>
        </AppBar>
        <TabPanel value={selectedTabIndex} index={0}>
          <LoginForm
            onSubmit={login}
            serverErrors={serverErrors}
            loading={loading}
          />
        </TabPanel>
        <TabPanel value={selectedTabIndex} index={1}>
          <RegisterForm
            onSubmit={register}
            serverErrors={serverErrors}
            loading={loading}
          />
        </TabPanel>
      </div>
    </Dialog>
  );
}
