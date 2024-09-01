import { Button, type SpectrumButtonProps } from '@adobe/react-spectrum';
import { forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type ForwardRefRenderFunction,
  type ReactNode
} from 'react';

export type ExposedProps = {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
  'data-variant': SpectrumButtonProps['variant'];
};

export type DecoratedComponent = ForwardRefExoticComponent<SpectrumButtonProps>;

export function withButtonStyles<T = any>(component: ForwardRefRenderFunction<T, ExposedProps>): DecoratedComponent {
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
          UNSAFE_style={styles}
          elementType={Component}
        />
      );
    }
  );

  WithRef.displayName = component.displayName;

  return WithRef;
}
