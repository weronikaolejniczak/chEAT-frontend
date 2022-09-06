import { useToggle } from 'hooks/useToggle';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { InputPropsType } from '../Input/Input';

type PasswordInputPropsType = {
  id: string;
  label: string;
};

export const PasswordInput = ({
  id,
  label,
  ...rest
}: PasswordInputPropsType & InputPropsType) => {
  const [isVisible, toggleIsVisible] = useToggle();

  return (
    <Input
      {...rest}
      id={id}
      label={label}
      icon={
        isVisible ? (
          <Icon name="eye-slash" onClick={toggleIsVisible} />
        ) : (
          <Icon name="eye" onClick={toggleIsVisible} />
        )
      }
      type={isVisible ? 'text' : 'password'}
    />
  );
};
