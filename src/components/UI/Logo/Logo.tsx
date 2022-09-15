import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_NAME } from 'constants/app';
import {
  ELogoSize,
  imageMultiplier,
  LOGO_PATH,
  REDIRECT_PATH,
  titleEl,
} from './constants';
import { Image, Title, Wrapper } from './styles';

type LogoPropsType = {
  hasLink?: boolean;
  size?: ELogoSize;
};

export const Logo = ({
  hasLink = true,
  size = ELogoSize.medium,
}: LogoPropsType) => {
  const { t } = useTranslation();

  const isSmall = size === ELogoSize.small;
  const altText = hasLink ? `${APP_NAME} - ${t('logo-alt-text')}` : APP_NAME;

  return (
    <Wrapper
      as={hasLink ? Link : 'div'}
      hasLink={hasLink}
      isSmall={isSmall}
      to={REDIRECT_PATH}
    >
      <Image alt={altText} multiplier={imageMultiplier[size]} src={LOGO_PATH} />
      <Title as={titleEl[size]}>{APP_NAME}</Title>
    </Wrapper>
  );
};

Logo.size = ELogoSize;
