import { yupResolver } from '@hookform/resolvers';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Validators } from '../../validators';
import SubmitButton from '../common/SubmitButton';
import { useAuthFormStyles } from './auth-form-helpers';

const schema = yup.object().shape({
  email: yup.string().required('This field is required').email('Invalid email'),
  password: yup
    .string()
    .matches(Validators.Password.regexp, Validators.Password.message)
    .required('This field is required'),
});

export default function RegisterForm(props) {
  const classes = useAuthFormStyles();
  const { onSubmit, serverErrors, loading } = props;
  const { handleSubmit, errors, control, valid } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = formValue => {
    if (valid) {
      onSubmit(formValue);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={classes.form}>
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
        loading={loading}
        type="submit"
        className={clsx(classes.formRow, classes.submitBtn)}
        variant="contained"
        color="primary"
      >
        Register
      </SubmitButton>
    </form>
  );
}
