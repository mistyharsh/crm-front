import { Avatar, Button, Group, Tooltip } from '@mantine/core';
import { ArrowLeftRight } from 'lucide-react';

import { SchemeToggle } from '#base/SchemeToggle.js';
import { ButtonAsLink } from '../Link.js';

export type BottomBarProps = {
  onClose?: () => void;
};

export function BottomBar(props: BottomBarProps) {
  const { onClose } = props;

  return (
    <Group wrap='nowrap'>
      <Tooltip label='Profile'>
        <ButtonAsLink
          to='/workspaces/$tenantId'
          params={{ tenantId: '' }}
          variant='outline'
          p={0}
        >
          <Avatar radius={'sm'} size={'md'} color='teal' name={'John Doe'} />
        </ButtonAsLink>
      </Tooltip>
      <Tooltip label='Change Workspace'>
        <ButtonAsLink to='/' variant='default' px={'sm'}>
          <ArrowLeftRight size={20} />
        </ButtonAsLink>
      </Tooltip>
      <SchemeToggle />
      <Button
        variant='default'
        px={'sm'}
        hiddenFrom='md'
        onClick={onClose}
        ml={'auto'}
      >
        Close
      </Button>
    </Group>
  );
}
