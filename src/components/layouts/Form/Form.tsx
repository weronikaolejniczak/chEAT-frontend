import { FormEventHandler } from 'react';
import { ReactNode } from 'react';

import { Footer, Header, StyledForm } from './styles';

type FormPropsType = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const Form = ({ children, onSubmit, ...rest }: FormPropsType) => {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  );
};

Form.Header = Header;
Form.Footer = Footer;
