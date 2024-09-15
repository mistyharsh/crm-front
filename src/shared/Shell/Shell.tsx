import { AppShell } from '@mantine/core';
import { useState, type ReactNode } from 'react';

export type ShellProps = {
  header?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  sidebar?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  main?: ReactNode;
};

export function Shell(props: ShellProps) {
  const { sidebar, header, main } = props;

  const [collapsed, setCollapsed] = useState(false);

  const close = () => setCollapsed(true);
  const open = () => setCollapsed(false);

  return (
    <AppShell
      layout='alt'
      header={{ height: 60 }}
      withBorder={false}
      navbar={{
        width: 240,
        breakpoint: 'md',
        collapsed: {
          desktop: false,
          mobile: collapsed,
        },
      }}
    >
      <AppShell.Header>
        {header && header(!collapsed, open, close)}
      </AppShell.Header>
      <AppShell.Navbar bg={'dark.6'}>
        {sidebar && sidebar(!collapsed, open, close)}
      </AppShell.Navbar>
      <AppShell.Main>{main}</AppShell.Main>
    </AppShell>
  );
}
