import clsx from 'clsx';
import type { ReactNode } from 'react';

import style from './FormGrid.module.css';

export type FormGridProps = {
  className?: string;
  children: ReactNode;
};

/**
 *  A 2-column grid for form layout.
 */
export function FormGrid(props: FormGridProps) {
  const { className, children } = props;

  return (
    <div className={clsx('FromGrid', style.grid, className)}>
      {children}
    </div>
  );
}

/**
 * Set the child span across entire row.
 */
FormGrid.grow = style.grow;

/**
 * Set the child span across entire row and providing a subgrid.
 */
FormGrid.subgrid = style.subgrid;
