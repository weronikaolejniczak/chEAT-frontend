import { UseFormRegister } from 'react-hook-form';
import { ReactNode, InputHTMLAttributes } from 'react';

import {
  StyledHelperText,
  StyledIcon,
  StyledInput,
  StyledLabel,
  Wrapper,
} from './styles';

type CustomPropsType = {
  id: string;
  error?: string | undefined;
  helperText?: ReactNode;
  icon?: ReactNode;
  label: string;
  // TODO: fix any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
};

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> &
  CustomPropsType;

export const Input = ({
  id,
  error,
  helperText,
  icon,
  label,
  register,
  ...rest
}: InputPropsType) => {
  const text = error ?? helperText;

  return (
    <Wrapper>
      {text && <StyledHelperText error={!!error}>{text}</StyledHelperText>}
      <StyledInput
        {...rest}
        {...register?.(id)}
        aria-invalid={error ? 'true' : 'false'}
        error={error}
        icon={icon}
        id={id}
        name={id}
        placeholder=" "
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {icon && <StyledIcon>{icon}</StyledIcon>}
    </Wrapper>
  );
};
