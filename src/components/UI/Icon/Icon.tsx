import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { CustomIcon } from './styles';

type IconPropsType = {
  name: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export const Icon = ({
  name,
  onClick,
  ...rest
}: Omit<FontAwesomeIconProps, 'icon'> & IconPropsType) => {
  return <CustomIcon {...rest} onClick={onClick} icon={name as IconProp} />;
};
