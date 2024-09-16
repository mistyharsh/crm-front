import { Button, Tooltip } from '@mantine/core';
import { MoonStar, SunMedium } from 'lucide-react';

import { useAppProvider } from './Provider.js';

export type SchemeToggleProps = {};

export function SchemeToggle(_props: SchemeToggleProps) {
  const { scheme, setScheme } = useAppProvider();

  const toChange = scheme === 'dark' ? 'light' : 'dark';
  const Icon = scheme === 'dark' ? SunMedium : MoonStar;
  const label = `Switch to ${toChange} mode`;

  return (
    <Tooltip label={label}>
      <Button variant='default' onClick={() => setScheme(toChange)} px={'sm'}>
        <Icon size={20} />
      </Button>
    </Tooltip>
  );
}
