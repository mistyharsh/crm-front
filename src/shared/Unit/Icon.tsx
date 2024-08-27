import { Icon, type IconProps } from '@adobe/react-spectrum';
import type { LucideProps } from 'lucide-react';
import { forwardRef, type CSSProperties, type FC } from 'react';

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

  const Wrapper = forwardRef<SVGSVGElement, IconWrapperProps>(function Wrapper(props, ref) {
    const { size, ...rest } = props;

    const strokeWidth = strokes[size ?? 'M'];

    const style = {
      ...props.style,
      fill: 'none',
    };

    return (
      <LucideIcon ref={ref} {...rest} style={style} strokeWidth={strokeWidth} />
    );
  });

  const IconWrapper = forwardRef<SVGSVGElement, Omit<IconProps, 'children'>>(function IconWrapper(props, ref) {

    return (
      <Icon {...props}>
        <Wrapper size={props.size} ref={ref} />
      </Icon>
    );
  });

  IconWrapper.displayName = LucideIcon.displayName;

  return IconWrapper;
}
