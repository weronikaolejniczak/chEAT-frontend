import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ENamespaces } from 'i18n';
import { signInWithGoogle } from 'services/auth/signInGoogle';
import { logInWithEmailAndPassword } from 'services/auth/signInPassword';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { EButtonVariant } from 'components/UI/Button/Button';
import { PasswordInput } from 'components/UI/PasswordInput';
import { Logo } from 'components/UI/Logo';
import { Form } from 'components/layouts/Form';
import { schema } from 'schemas/loginForm';

type FormDataType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: FormDataType) =>
    await logInWithEmailAndPassword(email, password);

  return (
    <div data-testid="login-form">
      <Form.Header>
        <Logo />
      </Form.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" label={t('login:submit-button')} />
      </Form>
      <Form.Footer>
        <Button
          type="button"
          onClick={signInWithGoogle}
          label={t('login:google-login-button')}
          variant={EButtonVariant.secondary}
        />
        <p>
          <Link to="/reset-password">{t('login:reset-password-link')}</Link>
        </p>
        <p>
          <Trans
            components={[<Link key="0" to="/register" />]}
            i18nKey="login:register-link"
            ns={ENamespaces.login}
          />
        </p>
      </Form.Footer>
    </div>
  );
};
