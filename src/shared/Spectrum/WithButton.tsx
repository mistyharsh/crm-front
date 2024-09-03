import { Button, type SpectrumButtonProps } from '@adobe/react-spectrum';
import { forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type ForwardRefRenderFunction,
  type ReactNode
} from 'react';

import style from './Style.module.css';


export type ExposedProps = {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
  'data-variant': SpectrumButtonProps['variant'];
};

export type DecoratedComponent = ForwardRefExoticComponent<SpectrumButtonProps>;
export type ButtonLikeComponent<T> = ForwardRefRenderFunction<T, ExposedProps>;

export function withButtonStyles<T = any>(component: ButtonLikeComponent<T>): DecoratedComponent {
  const styles = {
    '--spectrum-button-border-width': '0',
    '--spectrum-button-border-radius': 'var(--spectrum-alias-border-radius-medium)',
  } as CSSProperties;

  const Component = forwardRef(component);

  const WithRef = forwardRef<any, SpectrumButtonProps>(
    function Wrapper(props, ref) {
      return (
        <Button
          ref={ref}
          {...props}
          UNSAFE_className={style.button}
          UNSAFE_style={styles}
          elementType={Component}
        />
      );
    }
  );

  WithRef.displayName = component.displayName;

  return WithRef;
}
