import styled from 'styled-components';

// TODO: consider moving to theme
const FORM_WIDTH = '30rem';

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 2rem 3rem;
  width: ${FORM_WIDTH};
`;

export const Footer = styled(Header)`
  margin: 3rem 2rem 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem;
  width: ${FORM_WIDTH};
`;
