import { Group } from '@mantine/core';

import { SchemeToggle } from '#base/SchemeToggle.js';

export type AppHeaderProps = {};

export function AppHeader(_props: AppHeaderProps) {
  return (
    <Group className='AppHeader' justify={'end'} p='sm' bg={'neutral.2'}>
      <SchemeToggle />
    </Group>
  );
}
