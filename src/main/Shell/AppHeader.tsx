import { ActionButton, Text, View, useProvider } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';
import { useContext } from 'react';

import { AppContext } from '#base/Provider.js';
import { LMenu } from '#shared/Icons.js';

export type AppHeaderProps = {
  onOpen: () => void;
};

export function AppHeader(props: AppHeaderProps) {
  const { onOpen } = props;

  const { setScheme } = useContext(AppContext);
  const { colorScheme } = useProvider();

  return (
    <View
      data-cl='AppHeader'
      position={'sticky'}
      top={'size-0'}
    >
      <ActionButton onPress={onOpen} isHidden={{ M: true }}>
        <Text>Menu</Text>
        <LMenu color='informative' />
      </ActionButton>
      <ActionButton
        onPress={() => setScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      >
        {colorScheme === 'dark' ? <Contrast /> : <Light />}
      </ActionButton>
    </View>
  );
}
