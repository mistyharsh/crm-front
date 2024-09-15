import { useAppProvider } from '#base/Provider.js';
import { Box, Button, Group } from '@mantine/core';
import { MoonStar, SunMedium } from 'lucide-react';

export type AppHeaderProps = {};

export function AppHeader(_props: AppHeaderProps) {
  const { scheme, setScheme } = useAppProvider();

  return (
    <Box
      bg={'gray.1'}
      p={'sm'}
      bd={'gray.2'}
      component='header'
    >
      <Group justify={'end'}>
        <Button
          onClick={() =>
            setScheme(scheme === 'dark' ? 'light' : 'dark')
          }
        >
          {scheme === 'dark' ? <MoonStar size={24} /> : <SunMedium size={24} />}
        </Button>
      </Group>
    </Box>
  );
}
