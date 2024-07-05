import { Outlet } from '@tanstack/react-router';

import { App } from '#shared/App/App.js';
import { MainAppHeader } from './Header/AppHeader.js';
import { Sidebar } from '../Shell/Sidebar.js';
import { Grid, View } from '@adobe/react-spectrum';

export function MainApp() {
  return (
    <App>
      <Grid
        areas={['sidebar header', 'sidebar content']}
        columns={['20%', '80%']}
        rows={['50px', 'auto']}
      >
        <View gridArea='sidebar'>
          <Sidebar />
        </View>
        <View gridArea='header'>
          <MainAppHeader />
        </View>
        <View gridArea='content' backgroundColor={'gray-75'}>
          <Outlet />
        </View>
      </Grid>
    </App>
  );
}
