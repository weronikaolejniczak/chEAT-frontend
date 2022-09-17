import * as yup from 'yup';

export const messages = {
  email: {
    format: 'email-invalid-format-error',
    required: 'email-required-error',
  },
  name: {
    required: 'name-required-error',
  },
  password: {
    min: 'password-min-chars',
    required: 'password-required-error',
  },
  repeatPassword: {
    required: 'repeat-password-required-error',
    noMatch: 'passwords-must-match',
  },
};

export const schema = yup.object({
  email: yup
    .string()
    .email(messages.email.format)
    .required(messages.email.required),
  name: yup.string().required(messages.name.required),
  password: yup
    .string()
    .required(messages.password.required)
    .min(8, messages.password.min),
  repeatPassword: yup
    .string()
    .required(messages.repeatPassword.required)
    .oneOf([yup.ref('password')], messages.repeatPassword.noMatch),
});
