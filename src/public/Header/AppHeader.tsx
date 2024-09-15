import { Box, Group } from '@mantine/core';

import { SchemeToggle } from '#base/SchemeToggle.js';

export type AppHeaderProps = {};

export function AppHeader(_props: AppHeaderProps) {
  return (
    <Box bg={'gray.1'} p={'sm'} bd={'gray.2'} component='header'>
      <Group justify={'end'}>
        <SchemeToggle />
      </Group>
    </Box>
  );
}
