import { Item, ListView, Text } from '@adobe/react-spectrum';
import SocialNetwork from '@spectrum-icons/workflow/SocialNetwork';

import { User } from '../../../gen/Api';

export type UserListProps = {
  users: User[];
};

export type UserListItemProps = {
  user: User;
};

export const UserListItem = (props: UserListItemProps) => {
  const { user } = props;
  const { firstName, lastName } = user;

  return (
    <>
      <SocialNetwork slot='illustration' />
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </>
  );
};

export function UserList(props: UserListProps) {
  const { users } = props;

  return (
    <ListView
      items={users}
      selectionMode='none'
      // width={'size-5000'}
      aria-label='Select workspace'
      children={(t) => {
        return (
          <Item key={t.id} textValue={t.id.toString()}>
            <UserListItem user={t} />
          </Item>
        );
      }}
    />
  );
}
