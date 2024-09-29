import { Group, Title } from '@mantine/core';
import type { LucideProps } from 'lucide-react';
import type { FC } from 'react';

import { FormGrid } from './FormGrid.js';

export type SectionTitleProps = {
  title: string;
  icon: FC<LucideProps>;
};


export function SectionTitle(props: SectionTitleProps) {
  const { title, icon: Icon } = props;

  return (
    <Group gap={'xs'} className={FormGrid.grow}>
      <Icon size={20} />
      <Title display={'flex'} order={4}>
        {title}
      </Title>
    </Group>
  );
}
