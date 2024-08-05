import { ActionButton, View, useProvider } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';
import Rail from '@spectrum-icons/workflow/Rail';
import { useContext } from 'react';

import { AppContext } from '#shared/App/Provider.js';
import type { SidebarState } from './useSidebar';

import style from './Style.module.css';

export type HeaderProps = {
  sidebar: SidebarState;
  onSidebar: (value: boolean) => void;
};

export function AppHeader(props: HeaderProps) {
  const { sidebar, onSidebar } = props;

  const { setScheme } = useContext(AppContext);
  const { colorScheme } = useProvider();

  const isSidebar = sidebar === 'open';

  return (
    <View
      data-cl='main-header'
      elementType={'header'}
      UNSAFE_className={style.header}
      backgroundColor={'gray-75'}
      borderColor={'gray-200'}
      borderBottomWidth={'thin'}
    >
      <ActionButton
        UNSAFE_className={style.navButton}
        onPress={() => onSidebar(!isSidebar)}
      >
        <Rail />
      </ActionButton>
      <ActionButton
        onPress={() => setScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      >
        {colorScheme === 'dark' ? <Contrast /> : <Light />}
      </ActionButton>
    </View>
  );
}
