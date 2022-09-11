import { ReactNode, InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form';

import { ENamespaces } from 'i18n';
import {
  StyledError,
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
  const { t } = useTranslation(ENamespaces.errors);

  const errorText = error ? t(error) : '';

  return (
    <Wrapper>
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
      {error && <StyledError>{errorText}</StyledError>}
      <StyledInput
        {...rest}
        {...register?.(id)}
        aria-invalid={error ? 'true' : 'false'}
        error={error}
        icon={icon}
        id={id}
        placeholder=" "
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {icon && <StyledIcon>{icon}</StyledIcon>}
    </Wrapper>
  );
};
