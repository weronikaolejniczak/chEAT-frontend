import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CustomIcon = styled(FontAwesomeIcon)`
  cursor: ${({ onClick }) => !!onClick && 'pointer'};
`;
