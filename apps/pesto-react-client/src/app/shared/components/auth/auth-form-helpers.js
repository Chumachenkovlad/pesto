import { makeStyles } from '@material-ui/core/styles';

export const useAuthFormStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },

  formRow: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },

  submitBtn: {
    height: '56px',
    marginBottom: 0,
  },
}));
