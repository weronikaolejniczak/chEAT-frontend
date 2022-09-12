import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  height: 100%;
`;

type StyledContentPropsType = {
  center?: boolean;
};

export const StyledContent = styled.main<StyledContentPropsType>`
  align-items: ${({ center }) => center && 'center'};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${({ center }) => center && 'center'};
  height: 100%;
`;
