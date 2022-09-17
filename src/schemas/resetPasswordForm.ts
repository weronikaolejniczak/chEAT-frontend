import * as yup from 'yup';

export const messages = {
  email: {
    format: 'email-invalid-format-error',
    required: 'email-required-error',
  },
};

export const schema = yup.object({
  email: yup
    .string()
    .email(messages.email.format)
    .required(messages.email.required),
});
