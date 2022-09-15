import styled from 'styled-components';

type WrapperPropsType = {
  hasLink: boolean;
  isSmall: boolean;
};

export const Wrapper = styled.div<WrapperPropsType>`
  align-items: center;
  cursor: ${({ hasLink }) => (hasLink ? 'pointer' : 'default')};
  display: flex;
  flex-direction: ${({ isSmall }) => (isSmall ? 'row' : 'column')};
  gap: ${({ isSmall }) => (isSmall ? 1.2 : 0.4)}rem;
  justify-content: center;
  user-select: none;
  width: fit-content;
`;

type ImagePropsType = {
  multiplier: number;
};

export const Image = styled.img<ImagePropsType>`
  object-fit: cover;
  height: 100%;
  width: ${({ multiplier }) => multiplier * 6.4}rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;
