import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ENamespaces } from 'i18n';
import { signInWithGoogle } from 'services/auth/signInGoogle';
import { registerWithEmailAndPassword } from 'services/auth/signUpPassword';
import { Button, Input, Logo, PasswordInput } from 'components/UI';
import { Form } from 'components/layouts/Form';
import { schema } from 'schemas/registerForm';

type FormDataType = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};

export const RegisterForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, name, password }: FormDataType) =>
    registerWithEmailAndPassword(name, email, password);

  return (
    <div data-testid="register-form">
      <Form.Header>
        <Logo />
      </Form.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          error={errors.name?.message}
          label={t('name')}
          type="text"
          register={register}
        />
        <Input
          id="email"
          error={errors.email?.message}
          label={t('email')}
          type="text"
          register={register}
        />
        <PasswordInput
          id="password"
          error={errors.password?.message}
          label={t('password')}
          type="password"
          register={register}
        />
        <PasswordInput
          id="repeatPassword"
          error={errors.repeatPassword?.message}
          label={t('repeat-password')}
          type="password"
          register={register}
        />
        <Button type="submit" label={t('register:submit-button')} />
      </Form>
      <Form.Footer>
        <Button
          type="button"
          onClick={signInWithGoogle}
          label={t('register:google-register-button')}
          variant={Button.variant.secondary}
        />
        <span>
          <Trans
            components={[<Link key="0" to="/login" />]}
            i18nKey="register:login-link"
            ns={ENamespaces.login}
          />
        </span>
      </Form.Footer>
    </div>
  );
};
