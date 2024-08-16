import { Flex, Heading, Link, View } from '@adobe/react-spectrum';
import { useLinkProps, useMatch } from '@tanstack/react-router';
import clsx from 'clsx';

import { homeRoute } from '../View/Home/Home.js';
import type { SidebarState } from './useSidebar.js';
import { WorkspaceSidebar } from './WorkspaceSidebar.js';

import style from './Sidebar.module.css';

export type SidebarProps = {
  state: SidebarState;
  onVisible: (value: false) => void;
};

export function Sidebar(props: SidebarProps) {
  const { state, onVisible } = props;

  const match = useMatch({
    from: '/workspaces/$tenantId',
    shouldThrow: false,
  });

  const tenantId = match?.params.tenantId;

  const onBackdrop = () => {
    onVisible(false);
  };

  // TODO: Better integration
  const homeHref = useLinkProps({
    to: homeRoute.to,
  }).href;

  return (
    <View elementType='nav' UNSAFE_className={clsx(style.sidebar, state)}>
      {state === 'open' && (
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
          href={homeHref}
          variant='secondary'
          isQuiet
        >
          <Heading level={1}>ClobWise</Heading>
        </Link>
        {tenantId && <WorkspaceSidebar />}
      </Flex>
    </View>
  );
}
