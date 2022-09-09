import * as yup from 'yup';

export const messages = {
  email: {
    format: 'E-mail has to be valid!',
    required: 'E-mail is required!',
  },
  password: {
    required: 'Password is required!',
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
