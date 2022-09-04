import styled from 'styled-components';

import { InputPropsType } from './Input';

export const StorybookWrapper = styled.div`
  width: 300px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
`;

type StyledInputPropsType = Omit<InputPropsType, 'label'>;

export const StyledInput = styled.input<StyledInputPropsType>`
  background-color: transparent;
  border: 2px solid
    ${({ error, theme }) => (error ? theme.colors.error : theme.colors.text)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  padding: 0.8em;
  padding-right: ${({ icon }) => icon && '4.35rem'};
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label`
  color: grey;
  font-size: 1.6rem;
  left: calc(2px + 1.6rem);
  position: absolute;
  top: 1.6rem;
  transition: all 0.2s;

  ${StyledInput}:focus ~ &,
  ${StyledInput}:not(:placeholder-shown) ~ & {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    left: 0;
    top: -2rem;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: 1.65rem;
  top: 1.65rem;
`;

type StyledHelperTextPropsType = {
  error?: boolean;
};

export const StyledHelperText = styled.div<StyledHelperTextPropsType>`
  color: ${({ error, theme }) => error && theme.colors.error};
  font-size: 1.4rem;
`;
