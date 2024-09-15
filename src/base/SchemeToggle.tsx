import { Button } from '@mantine/core';
import { MoonStar, SunMedium } from 'lucide-react';

import { useAppProvider } from './Provider.js';

export type SchemeToggleProps = {};

export function SchemeToggle(_props: SchemeToggleProps) {
  const { scheme, setScheme } = useAppProvider();

  const toChange = scheme === 'dark' ? 'light' : 'dark';
  const Icon = scheme === 'dark' ? MoonStar : SunMedium;

  return (
    <Button onClick={() => setScheme(toChange)}>
      <Icon size={24} />
    </Button>
  );
}
