import { Avatar, Group, Stack, Text } from '@mantine/core';

import type { User } from '#api/Operation.js';

export type UserListProps = {
  users: User[];
};

export function UserList(props: UserListProps) {
  const { users } = props;

  return (
    <Stack gap={'md'}>
      {users.map((t) => (
        <UserListItem key={t.id} user={t} />
      ))}
    </Stack>
  );
}

export type UserListItemProps = {
  user: User;
};

export function UserListItem(props: UserListItemProps) {
  const { user } = props;
  const { firstName, lastName } = user;
  const name = firstName + ' ' + lastName;

  return (
    <Group>
      <Avatar radius={'sm'} color='initials' name={name} />
      <Text>{name}</Text>
    </Group>
  );
}
