import { Button, type ButtonProps } from '@mantine/core';
import {
  type RegisteredRouter,
  type LinkProps,
  Link,
} from '@tanstack/react-router';
import { forwardRef, type ComponentProps } from 'react';

export type FilteredProps = Omit<ButtonProps, 'compoent'>;

export type LinkFC = <
  TFrom extends string = string,
  TTo extends string = '',
  TMaskFrom extends string = TFrom,
  TMaskTo extends string = '',
>(
  props: FilteredProps &
    LinkProps<RegisteredRouter, TFrom, TTo, TMaskFrom, TMaskTo>
) => React.ReactElement;

export type Props = ComponentProps<LinkFC>;

export const ButtonAsLink = forwardRef<HTMLAnchorElement, Props>(
  function ButtonAsLink(props, ref) {
    const { ...rest } = props;

    return <Button component={Link} ref={ref} {...rest} />;
  }
) as LinkFC;
