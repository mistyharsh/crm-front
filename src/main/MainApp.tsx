import { View } from '@adobe/react-spectrum';
import { Outlet } from '@tanstack/react-router';

import { App } from '#shared/App/App.js';
import { MainAppHeader } from './Header/AppHeader.js';
import { Sidebar } from './Shell/Sidebar.js';
import style from './Style.module.css';

export function MainApp() {
  return (
    <App>
      <View
        data-cl='main-header'
        elementType={'header'}
        UNSAFE_className={`${style.mainHeader}`}
        backgroundColor={'gray-75'}
        borderColor={'gray-200'}
        borderBottomWidth={'thin'}
      >
        <MainAppHeader />
      </View>
      <View
        elementType='nav'
        UNSAFE_className={`${style.sidebar}`}
        height={'100%'}
      >
        <Sidebar />
      </View>
      <View elementType={'main'} UNSAFE_className={style.main}>
        <Outlet />
      </View>
    </App>
  );
}
