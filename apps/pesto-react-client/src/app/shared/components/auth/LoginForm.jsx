import { yupResolver } from '@hookform/resolvers';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import SubmitButton from '../common/SubmitButton';
import { useAuthFormStyles } from './auth-form-helpers';

const schema = yup.object().shape({
  email: yup.string().required('This field is required').email('Invalid email'),
  password: yup.string().required(),
});

export default function LoginForm(props) {
  const classes = useAuthFormStyles();
  const { onSubmit, serverErrors, loading } = props;
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Controller
        className={classes.formRow}
        as={
          <TextField
            error={Boolean(errors.email)}
            label="Email"
            variant="outlined"
            helperText={errors.email?.message}
          />
        }
        name="email"
        control={control}
        defaultValue=""
      />

      <Controller
        className={classes.formRow}
        as={
          <TextField
            error={Boolean(errors.password)}
            label="Password"
            variant="outlined"
            helperText={errors.password?.message}
          />
        }
        name="password"
        control={control}
        defaultValue=""
      />

      <SubmitButton
        type="submit"
        loading={loading}
        className={clsx(classes.formRow, classes.submitBtn)}
        variant="contained"
        color="primary"
      >
        Login
      </SubmitButton>
    </form>
  );
}
