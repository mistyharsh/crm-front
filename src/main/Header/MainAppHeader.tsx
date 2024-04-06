import {
  Header,
  ActionButton,
  useProvider,
  Flex,
  View,
} from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';

import type { ColorScheme } from '../../App/Provider';

export type MainAppHeaderProps = {
  onColorSchemeChange: (colorScheme: ColorScheme) => void;
};

export function MainAppHeader(props: MainAppHeaderProps) {
  const { onColorSchemeChange } = props;

  const { colorScheme } = useProvider();

  return (
    <Header data-cl='main-header'>
      <View
        backgroundColor={'gray-50'}
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
