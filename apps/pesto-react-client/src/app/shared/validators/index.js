export const passwordRegex = new RegExp(
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})'
);

const Password = {
  regexp: passwordRegex,
  message:
    'Password should contain at least 8 symbols, one uppercase, lowercase letter and digit',
};

export const Validators = {
  Password,
};
