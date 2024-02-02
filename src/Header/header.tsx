import React from 'react';
import {
  Header,
  ActionButton,
  MenuTrigger,
  Menu,
  Item,
  Selection,
} from '@adobe/react-spectrum';

let currentTheme = window.matchMedia('(prefers-color-scheme: dark)');

function HeaderBar() {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(['system'])
  );

  return (
    <Header width='single-line-width'>
      <MenuTrigger>
        <ActionButton>Theme</ActionButton>
        <Menu
          selectionMode='single'
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Item key='system'>System</Item>
          <Item key='dark'>Dark</Item>
          <Item key='light'>Light</Item>
        </Menu>
      </MenuTrigger>
    </Header>
  );
}

export default HeaderBar;
