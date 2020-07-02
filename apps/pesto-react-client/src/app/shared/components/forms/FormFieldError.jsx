import React from 'react';

export function FormFieldErrors({ errors }) {
  console.log(errors);
  errors = errors ?? {};
  console.log(errors);

  return Object.values(errors).map((error, index) => (
    <FormFieldError error={error} key={index} />
  ));
}

export function FormFieldError({ error }) {
  return <span>{error.message}</span>;
}
