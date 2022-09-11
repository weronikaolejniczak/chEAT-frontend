import * as yup from 'yup';

export const messages = {
  email: {
    format: 'email-invalid-format-error',
    required: 'email-required-error',
  },
  password: {
    required: 'password-required-error',
  },
};

export const schema = yup
  .object({
    email: yup
      .string()
      .email(messages.email.format)
      .required(messages.email.required),
    password: yup.string().required(messages.password.required),
  })
  .required();
