import { ReactNode } from 'react';

import { Menu } from 'components/UI/Menu';
import { StyledContent, StyledPage } from './styles';

type PagePropsType = {
  center?: boolean;
  children: ReactNode;
  showMenu?: boolean;
};

export const Page = ({ center, children, showMenu = true }: PagePropsType) => {
  return (
    <StyledPage>
      {showMenu && <Menu />}
      <StyledContent center={center}>{children}</StyledContent>
    </StyledPage>
  );
};
