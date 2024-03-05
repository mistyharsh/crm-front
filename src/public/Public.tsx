import { View } from '@adobe/react-spectrum';
import { Outlet } from '@tanstack/react-router';
import { useContext } from 'react';

import { AppContext } from '../App/Provider';
import { AppHeader } from './Header/AppHeader';


export function PublicApp() {
  const app = useContext(AppContext);

  return (
    <View data-cl='public-app' minHeight={'100vh'}>
      <AppHeader onColorSchemeChange={app.setScheme} />
      <Outlet />
    </View>
  );
}
