import { View } from '@adobe/react-spectrum';
import { Outlet } from '@tanstack/react-router';
import { useContext } from 'react';

import { AppContext } from '../App/Provider';
import { MainAppHeader } from './Header/MainAppHeader';

export function MainApp() {
  const app = useContext(AppContext);

  return (
    <View data-cl='main-app' minHeight={'100vh'}>
      <MainAppHeader onColorSchemeChange={app.setScheme} />
      <Outlet />
    </View>
  );
}
