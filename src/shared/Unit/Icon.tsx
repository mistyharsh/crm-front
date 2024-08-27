import { Icon, type IconProps } from '@adobe/react-spectrum';
import {
  Camera as LCamera,
  Apple as LApple,
  type LucideProps
} from 'lucide-react';
import type { CSSProperties, FC } from 'react';

export const Camera = withIcon(LCamera);
export const Apple = withIcon(LApple);

const strokes: Record<NonNullable<IconProps['size']>, number> = {
  XXS: 2,
  XS: 1.75,
  S: 1.5,
  M: 1.25,
  L: 1,
  XL: 1,
  XXL: 1,
};


export type IconWrapperProps = {
  size?: IconProps['size'];
  style?: CSSProperties;
};

/**
 * A new higher-order wrapper to fuse Lucide Icons with React Spectrum
 * icons so that Lucide Icons can respect Spectrum dimensions and colors.
 */
export function withIcon(LucideIcon: FC<LucideProps>) {

  function Wrapper(props: IconWrapperProps) {
    const { size, ...rest } = props;

    const strokeWidth = strokes[size ?? 'M'];

    const style = {
      ...props.style,
      fill: 'none',
    };

    return (
      <LucideIcon {...rest} style={style} strokeWidth={strokeWidth} />
    );
  }

  const IconWrapper = function(props: Omit<IconProps, 'children'>) {
    return (
      <Icon {...props}>
        <Wrapper size={props.size} />
      </Icon>
    );
  };

  IconWrapper.displayName = LucideIcon.displayName;

  return IconWrapper;
}
