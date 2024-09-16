import { AppShell, type AppShellNavbarConfiguration } from '@mantine/core';
import { useState, type ReactNode } from 'react';

export type ShellProps = {
  header?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  sidebar?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  main?: ReactNode;
};

export function Shell(props: ShellProps) {
  const { sidebar, header, main } = props;

  const [collapsed, setCollapsed] = useState(true);

  const close = () => setCollapsed(true);
  const open = () => setCollapsed(false);

  const navbar: AppShellNavbarConfiguration = {
    width: 240,
    breakpoint: 'md',
    collapsed: {
      desktop: false,
      mobile: collapsed,
    },
  };

  return (
    <AppShell
      layout='alt'
      header={{ height: 60 }}
      withBorder={false}
      navbar={sidebar && navbar}
    >
      <AppShell.Header>
        {header && header(!collapsed, open, close)}
      </AppShell.Header>
      {sidebar && sidebar(!collapsed, open, close)}
      <AppShell.Main>{main}</AppShell.Main>
    </AppShell>
  );
}
