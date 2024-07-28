import { Outlet } from '@tanstack/react-router';

import { AppHeader } from './AppHeader.js';
import { Sidebar } from './Sidebar.js';
import { useSidebar } from './useSidebar.js';

import style from './Style.module.css';

export function Shell() {
  const [sidebarState, setSidebarState] = useSidebar();

  return (
    <div data-cl='shell' className={style.shell}>
      <Sidebar state={sidebarState} onVisible={setSidebarState} />
      <div className={style.scrollArea}>
        <AppHeader sidebar={sidebarState} onSidebar={setSidebarState} />
        <main className={style.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
