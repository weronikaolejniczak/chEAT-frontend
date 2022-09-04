import { ButtonHTMLAttributes, ReactNode } from 'react';

import { EIconAlignment } from 'enums/EIconAlignment';
import { StyledButton } from './styles';

export enum EButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  iconAlignment?: EIconAlignment;
  outlined?: boolean;
  variant: EButtonVariant;
}

export const Button = ({
  label,
  icon,
  iconAlignment = EIconAlignment.right,
  outlined = false,
  variant = EButtonVariant.primary,
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton label={label} outlined={outlined} variant={variant} {...rest}>
      <>
        {iconAlignment === EIconAlignment.left && icon}
        {label}
        {iconAlignment === EIconAlignment.right && icon}
      </>
    </StyledButton>
  );
};
