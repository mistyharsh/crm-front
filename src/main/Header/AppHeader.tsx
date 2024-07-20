import { ActionButton, useProvider } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';
import Rail from '@spectrum-icons/workflow/Rail';
import { useContext, useEffect, useState } from 'react';

import { AppContext } from '#shared/App/Provider.js';
import style from '../Style.module.css';

export type MainAppHeaderProps = {};

export function MainAppHeader(_props: MainAppHeaderProps) {
  const app = useContext(AppContext);
  const { colorScheme } = useProvider();

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(`nav`);
    sidebar?.classList.toggle(`${style.sidebarVisible}`);

    setSidebarVisible(!isSidebarVisible);
  };

  const overlay = document.querySelector('nav')?.childNodes[1];
  useEffect(() => {
    if (isSidebarVisible) {
      overlay?.addEventListener('mousedown', toggleSidebar);
    } else {
      overlay?.removeEventListener('mousedown', toggleSidebar);
    }
    return () => {
      overlay?.removeEventListener('mousedown', toggleSidebar);
    };
  }, [isSidebarVisible]);

  const onColorSchemeChange = app.setScheme;

  return (
    <>
      <ActionButton
        UNSAFE_className={`${style.hamburgerButton}`}
        onPress={toggleSidebar}
      >
        <Rail />
      </ActionButton>
      <ActionButton
        onPress={() =>
          onColorSchemeChange(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        {colorScheme === 'dark' ? <Contrast /> : <Light />}
      </ActionButton>
    </>
  );
}
