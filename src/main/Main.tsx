import { View } from '@adobe/react-spectrum';
import { Outlet } from '@tanstack/react-router';

export function MainApp() {
  return (
    <View data-cl='main-app' minHeight={'100vh'}>
      <Outlet />
    </View>
  );
}
