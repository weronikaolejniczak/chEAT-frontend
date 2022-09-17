import { Trans, useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import { ENamespaces } from 'i18n';
import { Button, Input, Logo } from 'components/UI';
import { Form } from 'components/layouts/Form';
import { schema } from 'schemas/resetPasswordForm';
import { sendPasswordReset } from 'services/auth/sendPasswordReset';

type FormDataType = {
  email: string;
};

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email }: FormDataType) => {
    const isReset = await sendPasswordReset(email);
    if (isReset) navigate('/login');
  };

  return (
    <div data-testid="reset-password-form">
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
        <Button type="submit" label={t('reset-password:submit-button')} />
      </Form>
      <Form.Footer>
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
