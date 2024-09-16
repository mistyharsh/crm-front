import { Button, Group } from '@mantine/core';
import { Menu } from 'lucide-react';

import { SchemeToggle } from '#base/SchemeToggle.js';

export type AppHeaderProps = {
  onOpen: () => void;
};

export function AppHeader(props: AppHeaderProps) {
  const { onOpen } = props;

  return (
    <Group p={'sm'} gap={'md'} justify='end' className='AppHeader'>
      <Button
        hiddenFrom='md'
        variant='default'
        onClick={onOpen}
        leftSection={<Menu size={16} />}
        children='Menu'
      />
      <SchemeToggle />
    </Group>
  );
}
