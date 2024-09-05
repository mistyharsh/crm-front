import { Button, type SpectrumButtonProps } from '@adobe/react-spectrum';
import { forwardRef } from 'react';

import style from './Style.module.css';

export const ButtonAsLink  = forwardRef<HTMLAnchorElement, SpectrumButtonProps<'a'>>(
  function ButtonAsLink(props, ref) {
    return (
      <Button
        ref={ref as any}
        {...props}
        UNSAFE_className={style.button}
        elementType={'a'}
      />
    );
  }
);
