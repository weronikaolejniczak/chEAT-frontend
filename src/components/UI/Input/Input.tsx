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
  error?: string;
  helperText?: ReactNode;
  icon?: ReactNode;
  label: string;
};

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> &
  CustomPropsType;

export const Input = ({
  id,
  error,
  helperText,
  icon,
  label,
  ...rest
}: InputPropsType) => {
  return (
    <Wrapper>
      <StyledHelperText error={!!error}>{error ?? helperText}</StyledHelperText>
      <StyledInput
        {...rest}
        error={error}
        icon={icon}
        id={id}
        name={id}
        placeholder=" "
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledIcon>{icon}</StyledIcon>
    </Wrapper>
  );
};
