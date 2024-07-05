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

import { AppContext } from '#shared/App/Provider.js';

export type MainAppHeaderProps = {};

export function MainAppHeader(_props: MainAppHeaderProps) {
  const app = useContext(AppContext);
  const { colorScheme } = useProvider();

  const onColorSchemeChange = app.setScheme;

  return (
    <Header data-cl='main-header'>
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
