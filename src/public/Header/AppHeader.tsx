import {
  Header,
  ActionButton,
  useProvider,
  Flex,
  View,
} from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';
import { useContext } from 'react';

import { AppContext } from '#base/Provider.js';

export type AppHeaderProps = {};

export function AppHeader(_props: AppHeaderProps) {
  const app = useContext(AppContext);
  const { colorScheme } = useProvider();

  const onColorSchemeChange = app.setScheme;

  return (
    <Header>
      <View
        backgroundColor={'gray-75'}
        padding={'size-100'}
        borderColor={'gray-200'}
        borderBottomWidth={'thin'}
      >
        <Flex direction={'row'} justifyContent={'end'}>
          <ActionButton
            onPress={() =>
              onColorSchemeChange(colorScheme === 'dark' ? 'light' : 'dark')
            }
          >
            {colorScheme === 'dark' ? <Contrast /> : <Light />}
          </ActionButton>
        </Flex>
      </View>
    </Header>
  );
}
