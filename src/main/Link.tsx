import type { SpectrumButtonProps } from '@adobe/react-spectrum';
import { type RegisteredRouter, type LinkProps, useRouter } from '@tanstack/react-router';
import { forwardRef, type ComponentProps } from 'react';

import { ButtonAsLink } from '#shared/Spectrum/ButtonAsLink.js';

// function linkGenerate<To extends string & ToOptions['to'], TFrom>(props: To, params: PathParamOptions<RegisteredRouter, TFrom, To>['params']) {}

export type FilteredProps = Omit<SpectrumButtonProps<'a'>, 'elementType' | 'href'>;

export type LinkFC = <
  TFrom extends string = string,
  TTo extends string = '',
  TMaskFrom extends string = TFrom,
  TMaskTo extends string = ''
>(props: FilteredProps & LinkProps<RegisteredRouter, TFrom, TTo, TMaskFrom, TMaskTo>) => React.ReactElement;

export type Props = ComponentProps<LinkFC>;


export const AppLink = forwardRef<HTMLAnchorElement, Props>(function Link(props, ref) {
  const { onPress, to, params, ...rest } = props;

  const router = useRouter();

  const href = router.buildLocation({ to, params }).href;

  return (
    <ButtonAsLink
      ref={ref}
      {...rest}
      href={href}
      onPress={(e) => {
        router.navigate({ to, params });
        onPress?.(e);
      }}
    />
  );
}) as LinkFC;
