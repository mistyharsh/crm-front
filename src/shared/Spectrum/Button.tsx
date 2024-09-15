import { Button, type SpectrumButtonProps } from '@adobe/react-spectrum';
import {
  createContext,
  forwardRef,
  useContext,
  type CSSProperties,
  type FC,
  type ForwardedRef,
  type ReactNode,
} from 'react';

import style from './Style.module.css';

export type ForwardedProps = {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
  'data-variant': SpectrumButtonProps['variant'];
};

export type LinkProps<AddedProps> = SpectrumButtonProps & AddedProps;
export type Component<AddedProps> = FC<LinkProps<AddedProps>>;
export type RenderFn<AddedProps> = (
  props: ForwardedProps,
  ref: ForwardedRef<HTMLAnchorElement>,
  added: AddedProps
) => ReactNode;

const AddedPropsContext = createContext({});

export function withButtonStyles<AddedProps>(renderFn: RenderFn<AddedProps>) {
  const Link = forwardRef<HTMLAnchorElement, ForwardedProps>((props, ref) => {
    const mainProps = useContext(AddedPropsContext);

    return renderFn(props, ref, mainProps as AddedProps);
  });

  function Wrapper(
    props: LinkProps<AddedProps>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) {
    return (
      <AddedPropsContext.Provider value={props}>
        <Button
          ref={ref as any}
          {...props}
          UNSAFE_className={style.button}
          elementType={Link}
        />
      </AddedPropsContext.Provider>
    );
  }

  const WithRef = forwardRef(Wrapper);

  return WithRef as any;
}
