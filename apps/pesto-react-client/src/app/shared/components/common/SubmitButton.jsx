import { Button, CircularProgress } from '@material-ui/core';
import React from 'react';

export default function SubmitButton(props) {
  const { loading, children, disabled, ...restProps } = props;
  return (
    <Button {...restProps} disabled={disabled || loading}>
      {loading ? <CircularProgress size={28} color="inherit" /> : children}
    </Button>
  );
}
