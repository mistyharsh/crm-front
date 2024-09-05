import { View, Text, Divider, Flex, Link, Heading } from '@adobe/react-spectrum';
import { useMatch } from '@tanstack/react-router';

import { LCog } from '#shared/Icons.js';
import { AppLink } from '../Link.js';
import { WorkspaceSidebar } from './WorkspaceSidebar.js';


export type NavigationProps = {
};

export function Navigation(props: NavigationProps) {
  const { } = props;

  // TODO: Fix for Storybook
  const match = useMatch({
    from: '/workspaces/$tenantId',
    shouldThrow: false,
  });

  const tenantId = match?.params.tenantId;

  return (
    <Flex
      direction={'column'}
      data-cl='Navigation'
      minHeight={'100%'}
    >
      <Link
        margin={'size-200'}
        href={{ to: '/workspaces/$tenantId', params: { tenantId } }}
        variant='secondary'
        isQuiet
      >
        <Heading level={1}>ClobWise</Heading>
      </Link>

      {tenantId && <WorkspaceSidebar tenantId={tenantId} />}

      <View
        position={'sticky'}
        bottom={0}
      >
        <Divider size='S' />

        <View padding={'size-200'}>
          <AppLink
            to='/workspaces/$tenantId'
            params={{ tenantId: '' }}
            variant='primary'
          >
            <LCog />
            <Text>Harshal Patil</Text>
          </AppLink>
        </View>
      </View>
      {/* {!isCollapsed && (
        <div onClick={onBackdrop} className={clsx(style.overlay)}></div>
      )}
      <Flex
        direction={'column'}
        gap={'size-200'}
        height={'100%'}
        UNSAFE_className={style.content}
      >
        <Link
          UNSAFE_className={style.heading}
          href={{ to: '/workspaces/$tenantId', params: { tenantId: '100' } }}
          variant='secondary'
          isQuiet
        >
          <Heading level={1}>ClobWise</Heading>
        </Link>
        {false && <WorkspaceSidebar />}
      </Flex> */}
    </Flex>
  );
}
