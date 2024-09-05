import { Content, Dialog, DialogContainer, Divider, Flex, Grid, Header, View } from '@adobe/react-spectrum';
import { useState, type ReactNode } from 'react';

import { useDesktop } from '../Spectrum/Query.js';

export type ShellProps = {
  header?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  sidebar?: (isOpen: boolean, open: () => void, close: () => void) => ReactNode;
  main?: ReactNode;
};

export function Shell(props: ShellProps) {
  const { sidebar, header, main } = props;

  const [isOpen, setIsOpen] = useState(true);
  const isDesktop = useDesktop();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Grid
      data-cl={'Shell'}
      areas={{
        base: ['content'],
        M: ['sidebar content'],
      }}
      columns={['size-3600', '1fr']}
      height={'100svh'}
    >
      {isDesktop ? (
        <View
          data-cl='Sidebar'
          gridArea={'sidebar'}
          overflow={'auto'}
          position={'relative'}
        >
          <Divider
            size='S'
            orientation='vertical'
            position={'absolute'}
            right={0}
            top={0}
            bottom={0}
          />
          {sidebar?.(isOpen, open, close)}
        </View>
      ) : (
        <DialogContainer type='fullscreenTakeover' isDismissable onDismiss={close}>
          {isOpen && (
            <Dialog>
              <Content>
                {sidebar?.(isOpen, open, close)}
              </Content>
            </Dialog>
          )}
        </DialogContainer>
      )}
      <Flex data-cl='Content' gridArea={'content'} gap={'size-200'} direction={'column'}>
        <Header>
          {header?.(isOpen, open, close)}
        </Header>
        <View elementType={'main'}>{main}</View>
      </Flex>
    </Grid>
  );
}
