import {
  Header,
  ActionButton,
  MenuTrigger,
  Menu,
  Item,
  Text,
  useProvider,
  Flex,
  View,
} from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import Light from '@spectrum-icons/workflow/Light';

import type { ColorScheme } from '../../App/App';
import Button from '@spectrum-icons/workflow/Button';

export type AppHeaderProps = {
  onColorSchemeChange: (colorScheme: ColorScheme) => void;
}

export function AppHeader(props: AppHeaderProps) {
  const { onColorSchemeChange } = props;

  const { colorScheme } = useProvider();

  return (
    <Header>
      <View
        backgroundColor={'gray-50'}
        padding={'size-100'}
        borderColor={'gray-200'}
        borderBottomWidth={'thin'}
      >
        <Flex
          direction={'row'}
          justifyContent={'end'}
        >
          <ActionButton onPress={() =>
            onColorSchemeChange(colorScheme === 'dark' ? 'light' : 'dark')}
          >
            {colorScheme === 'dark'
              ? <Contrast />
              : <Light />}
          </ActionButton>
        </Flex>
      </View>
    </Header>
  );
}
