import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInWithGoogle } from 'services/auth/signInGoogle';
import { logInWithEmailAndPassword } from 'services/auth/signInPassword';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { EButtonVariant } from 'components/UI/Button/Button';
import { PasswordInput } from 'components/UI/PasswordInput';
import { Form } from 'components/layouts/Form';
import { schema } from 'schemas/loginForm';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: FormData) =>
    await logInWithEmailAndPassword(email, password);

  return (
    <div data-testid="login-form">
      <Form.Header>
        <h1>chEAT</h1>
      </Form.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          error={errors.email?.message}
          label="E-mail"
          type="text"
          register={register}
        />
        <PasswordInput
          id="password"
          error={errors.password?.message}
          label="Password"
          type="password"
          register={register}
        />
        <Button type="submit" label="Login" />
      </Form>
      <Form.Footer>
        <Button
          type="button"
          onClick={signInWithGoogle}
          label="Login with Google"
          variant={EButtonVariant.secondary}
        />
        <p>
          <Link to="/reset-password">I forgot my password</Link>
        </p>
        <p>
          Don&apos;t have an account? <Link to="/register">Register</Link> now!
        </p>
      </Form.Footer>
    </div>
  );
};
