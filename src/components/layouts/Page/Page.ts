import styled from 'styled-components';

type PagePropsType = {
  center?: boolean;
};

export const Page = styled.main<PagePropsType>`
  align-items: ${({ center }) => center && 'center'};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => center && 'center'};
  height: 100%;
  width: 100%;
`;
